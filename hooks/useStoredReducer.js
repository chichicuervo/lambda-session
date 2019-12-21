import React, { useReducer, useEffect } from "react";
import { useSessionStorage } from 'react-use';

export const useStoredReducer = ( keyName, reducer, initialValue = {}, raw) => {
    const [ storage, setStorage ] = useSessionStorage(keyName, initialValue, raw)

    return useReducer((state, action) => {
        state = reducer(state, action)

        setStorage(state)

        return state
    }, storage)
}

export default useStoredReducer
