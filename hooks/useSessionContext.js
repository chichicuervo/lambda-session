import React, { useContext, createContext, useReducer } from "react";

import useStoredReducer from './useStoredReducer'

const Context = createContext()

const initialState = {
    isInitialized: false,
}

const defaultError = payload => ({ error: true, errorDetails: payload })

const noOp = () => ({})

const makeReducer = ({
    authenticate = noOp,
    invalidate = noOp,
    error = defaultError,
    ...options
}) => (state, action) => {
    try {
        switch (action.type) {
            case 'INITIALIZE':
                return { ...state, isInitialized: true }
            case 'AUTHENTICATE':
                return { ...state, isAuthenticated: true, ...authenticate(action.payload)}
            case 'INVALIDATE':
                return { ...state, isAuthenticated: false, ...invalidate(action.payload)}
            case 'ERROR':
                return { ...state, ...error(action.payload)}
            case 'TERMINATE':
                return initialState
            default:
                return state
        }
    } catch (e) {
        console.log(e)
        // return { ...state, ...defaultError(e) }
        return { ...initialState, ...defaultError(e) }
    }
}

export const SessionProvider = ({
    useStorage = true,
    keyName = 'session-data',
    initialState = {},
    children,
    ...props
}) => {
    const reducer = makeReducer(props)
    const [state, dispatch] = useStorage
        ? useStoredReducer(keyName, reducer, initialState)
        : useReducer(reducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch, ...props }}>
            {children}
        </Context.Provider>
    )
}

export const useSessionContext = () => {
    const context = useContext(Context)

    const { dispatch, state: { isInitialized } } = context

    !isInitialized && dispatch({ type: 'INITIALIZE' })

    return context
}

export const closeSessionContext = () => {
    const { dispatch } = useContext(Context)

    dispatch({ type: 'TERMINATE' })
}

export default useSessionContext
