import {
    ClerkExpressWithAuth,
    ClerkExpressRequireAuth,
    createClerkClient,
    ClerkMiddlewareOptions,
    ClerkOptions
} from '@clerk/clerk-sdk-node'
import {defineEventHandler, createApp, fromNodeMiddleware, createError, getRequestHeaders, setResponseHeader} from "h3";
import {clerkConfig} from "./clerkInstance"

export const clerkWithAuthMiddleware = (options: ClerkMiddlewareOptions) => {
    return defineEventHandler(async (event) => {
        const {audience, jwtKey, onError, signInUrl, authorizedParties} = options || {
            audience: process.env.NITRO_CLERK_MIDDLEWARE_OPTIONS_AUDIENCE || '',
            jwtKey: process.env.NITRO_CLERK_MIDDLEWARE_OPTIONS_JWT_KEY || '',
            signInUrl: process.env.NITRO_CLERK_MIDDLEWARE_OPTIONS || ''
        }
        ClerkExpressWithAuth({
            audience,
            jwtKey,
            signInUrl,
            authorizedParties
        })
    })
}


export const clerkWithRequireAuth = (options: ClerkMiddlewareOptions) => {
    return defineEventHandler(async (event) => {
        const {audience, jwtKey, onError, signInUrl, authorizedParties} = options || {
            audience: process.env.NITRO_CLERK_MIDDLEWARE_OPTIONS_AUDIENCE || '',
            jwtKey: process.env.NITRO_CLERK_MIDDLEWARE_OPTIONS_JWT_KEY || '',
            signInUrl: process.env.NITRO_CLERK_MIDDLEWARE_OPTIONS || ''
        }
        try {
            ClerkExpressRequireAuth({
                audience,
                jwtKey,
                signInUrl,
                authorizedParties
            })
        } catch (error) {
            console.error(error)
            await onError(error)
        }
    })
}


export const h3ClerkMiddleware = (options: ClerkOptions) => {
    return defineEventHandler(async (event) => {
        const {secretKey, publishableKey, apiVersion, apiUrl, ...option} = options || clerkConfig

        if (!secretKey) {
            throw createError('Secret key is missing!')
        }

        if (!publishableKey) {
            throw createError('Publishable key is missing!')
        }
        const clerkClient = createClerkClient({
            secretKey,
            publishableKey,
            apiUrl,
            apiVersion,
            ...option
        })

        const req = event.web.request
        const {isSignedIn, status, headers, toAuth} = await clerkClient.authenticateRequest(req, {
            secretKey,
            publishableKey
        })

        // Check headers
        if (headers) {
            headers.forEach((value, key) => {
                return setResponseHeader(event, key, value)
            })
        }

        if (status === 'handshake') {
            throw createError('Unexpected handshake, no redirect ')
        }

        // Set Context
        event.context._clerk_auth = toAuth()
        event.context._clerk = clerkClient
    })
}