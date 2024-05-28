import {defineEventHandler, getCookie, parseCookies, setResponseStatus} from "h3";
import {clients, sessions} from "@clerk/clerk-sdk-node";


const useAuthenticateSession = defineEventHandler(async (event) => {
    const sessionId = event.context._clerk_session_id

//    const cookies = parseCookies(event)
    const clientToken = getCookie(event, '__session')


    const session = await sessions.verifySession(sessionId, clientToken)

    setResponseStatus(event, 200, 'Session successful created.')

    return session

})