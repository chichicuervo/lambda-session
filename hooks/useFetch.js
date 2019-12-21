import React, { useEffect } from "react";

import { useFetch, useStatefulFetch } from '@jbelich/lambda-api/hooks';

import useSessionContext from './useSessionContext'

const useSessionFetch = () => {
    const { state, dispatch, inject, ...context } = useSessionContext()

    const { state: fetchState, fetch } = useFetch()

    const f = async (url, { headers, noInvalidate = false, ...options } = {}) => {
        options = {
            ...options,
            headers: {
                ...headers,
                ...(inject instanceof Function ? inject() : inject instanceof Object ? inject : undefined)
            }
        }

        const payload = await fetch(url, options)

        const { error, errorDetails } = fetchState
        const { ok, status } = payload

        if (error) {
            dispatch({ type: 'ERROR', payload: { error, errorDetails, ...payload } })
        } else

        if (status >= 500 && status < 600) {
            dispatch({ type: 'ERROR', payload })
        } else

        if (status >= 400 && status < 500) {
            dispatch({ type: !noInvalidate ? 'INVALIDATE' : 'ERROR', payload })
        } else

        dispatch({ type: ok ? 'AUTHENTICATE' : 'ERROR', payload })

        return payload
    }

    return { state, fetchState, fetch: f }
}

const useStatefulSessionFetch = (url, { headers, noInvalidate = false, ...options } = {}) => {
    const { state: auth, dispatch, inject, ...context } = useSessionContext()

    options = {
        ...options,
        headers: {
            ...headers,
            ...(inject instanceof Function ? inject() : inject instanceof Object ? inject : undefined)
        }
    }

    const state = useStatefulFetch(url, options)

    useEffect(() => {
        const { error, complete, errorDetails, response: payload } = state

        if (!complete && !error) return

        const { ok, status } = payload || {}

        if (error) {
            dispatch({ type: 'ERROR', payload: { error, errorDetails, ...payload } })
        } else

        if (status >= 500 && status < 600) {
            dispatch({ type: 'ERROR', payload })
        } else

        if (status >= 400 && status < 500) {
            dispatch({ type: !noInvalidate ? 'INVALIDATE' : 'ERROR', payload })
        } else

        dispatch({ type: ok ? 'AUTHENTICATE' : 'ERROR', payload })

    }, [state.complete, state.error])

    return { ...state, auth }
}

export {
    useSessionFetch as useFetch,
    useStatefulSessionFetch as useStatefulFetch
}
