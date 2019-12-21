import { ApiMiddleware } from '@jbelich/lambda-api';
import WebTokenHandler, { TokenExpiredError, JsonWebTokenError, NotBeforeError } from '../lib/WebTokenHandler';

const DEFAULT_HEADER = 'X-Session-Token'

export class Session extends ApiMiddleware {

    constructor(req, res, next, options = {}) {
        super(req, res, next, { noHandle: true, ...options })

        const get = () => {
            const p = this.payload
            req.log.debug('getPayload', p)
            return p
        }
        const set = v => {
            req.log.debug('setPayload', v)
            this.payload = v
        }
        Object.defineProperty(req, options.payloadName || 'session', { get, set, enumerable: true })

        return this.handler
    }

    get generator() {
        const log = this.log
        const { secret, publicKey, privateKey, ...options } = this.options

        return this.set('generator', () => {
            log.trace('Session:generator')

            return new WebTokenHandler(secret || privateKey, secret || publicKey, {
                algorithm: 'HS256',
                expiresIn: '12h',
                ...options,
            })
        })
    }

    get authToken() {
        const log = this.log
        const request = this.request
        const response = this.response

        return this.set('authToken', () => {
            log.trace('Session:authToken')

            const { type, value } = request.auth

            log.debug('Session:authToken', { type, value })

            if (type === 'Bearer' && value && value !== 'undefined') {
                return value
            }
        })
    }

    set header(token) {
        const { header } = this.options

        this.log.debug('Session:setHeader', { header: header || DEFAULT_HEADER, token })
        this.response.header(header || DEFAULT_HEADER, token)
    }

    get payload() {
        const log = this.log

        return this.set('payload', () => {
            log.trace('Session:payload')

            try {
                const value = this.authToken

                if (value) {
                    const { iat, exp, nbf, jti, ...payload } = this.generator.verify(value)

                    log.info('Session:payload/value', payload)

                    return payload
                }

                log.debug('Session:payload/NoPayload')
            } catch (e) {
                switch (e.name) {
                    case 'TokenExpiredError':
                    case 'NotBeforeError':
                    // case 'JsonWebTokenError':
                        return { error: e }
                    default:
                        throw e
                }
            }
        })
    }

    set payload(val) {
        const token = this.generator.sign(val)

        if (token) {
            this.header = token
            this.store.set('payload', val)
        }
    }

    async resolve() {
        this.log.trace('Session:resolve')

        try {
            if (!this.authToken) {
                throw new Error ('Invalid Authorization token')
            }

            const token = this.generator.refresh(this.authToken)

            if (token) {
                this.header = token
            }
        } catch (error) {
            this.log.debug('Session:resolve/Auth Error', error)

            this.payload = {} // this should probably be randomized in some way.
        }
    }
}

export default Session
