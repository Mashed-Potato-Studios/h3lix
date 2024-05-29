import {createClerkClient} from '@clerk/clerk-sdk-node';


type ClerkConfig = {
    secretKey: string
    publishableKey: string
    apiVersion?: string
    apiUrl?: string
    httpOptions?: object
}

export const clerkConfig: ClerkConfig = {
    secretKey: process.env.NITRO_CLERK_SECRET_KEY || '',
    publishableKey: process.env.NITRO_CLERK_PUBLISHABLE_KEY || '',
    apiVersion: process.env.NITRO_CLERK_API_VERSION,
    apiUrl: process.env.NITRO_CLERK_API_URL,
    httpOptions: {}
}

export const clerkClient = createClerkClient(clerkConfig);

