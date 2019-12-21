import React, { useState } from "react";
import { useSessionStorage } from 'react-use';

const BEARER = 'Bearer ' // the space is important!!!!!

class Session {

    constructor ({ logger = console.log, debug, ...props }) {
        this.props = {
            ...props,
            debug: debug || false,
            log: logger || console.log
        }
    }

    get inject() {
        const { request: header, requestBearer, token } = this.props
        return () => ({ [header] : `${requestBearer && BEARER}${token}`})
    }

    get authenticate() {
        const { response: header, responseBearer, token, setToken, log, debug } = this.props

        return ({ headers }) => {
            if (!headers.get) throw new Error ('Invalid response object. missing headers.get')
            let value = headers.get(header)

            if (responseBearer) {
                if (!value.startsWith(BEARER)) throw new Error ('Invalid session header.  Bearer required')

                value = value.split(' ')[1]
            }

            if (!value || !value.length) throw new Error ('Invalid session header.')

            debug && log('Session Token:', value)

            setToken(value)

            return { token } // might need to return "value"
        }
    }

    get invalidate() {
        return payload => ({ token: undefined })
    }
}

export const useHeaderSession = ({
    token: initialToken,
    sessionName = 'session-token',
    requestBearer = true,
    request = 'Authorization',
    responseBearer = false,
    response = 'X-Session-Token'
} = {}) => {
    // const [ token, setToken ] = useState(initalToken)
    const [ token, setToken ] = useSessionStorage(sessionName, initialToken)

    const obj = new Session({
        token, setToken,
        requestBearer, request,
        responseBearer, response
    })

    return {
        token,
        inject: obj.inject,
        authenticate: obj.authenticate,
        invalidate: obj.invalidate,
    }
}

export default useHeaderSession
