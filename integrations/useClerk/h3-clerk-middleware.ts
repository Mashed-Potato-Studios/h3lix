import {sessions, ClerkExpressWithAuth, ClerkExpressRequireAuth, ClerkMiddlewareOptions} from '@clerk/clerk-sdk-node'
import {defineEventHandler, createApp, fromNodeMiddleware} from "h3";


export const clerkWithAuthMiddleware = (options: ClerkMiddlewareOptions) => {
    return defineEventHandler(async (event) => {
        ClerkExpressWithAuth(options)
    })
}

export const clerkWithRequireAuth = (options: ClerkMiddlewareOptions) => {
    return defineEventHandler(async (event) => {
        ClerkExpressRequireAuth(options)
    })
}