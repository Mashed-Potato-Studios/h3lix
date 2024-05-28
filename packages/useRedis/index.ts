import {createError, sendError} from "h3";
import {defineNitroPlugin} from "nitropack/dist/runtime/plugin";
import client from './redis'

export default defineNitroPlugin(async (nitroApp) => {
    console.log("Connected")
    await client.connect()
    nitroApp.hooks.hook("beforeResponse", async (event, {body}) => {

    })
    nitroApp.hooks.hook("error", async (error, {event}) => {
        client.on('error', err => console.log(error))
    })
    nitroApp.hooks.hook("close", async () => {
        await client.disconnect()
    })
})

//import { createClient } from 'redis';
//
//const client = createClient();
//
//client.on('error', err => console.log('Redis Client Error', err));
//
//await client.connect();