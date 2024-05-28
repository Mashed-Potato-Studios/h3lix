import {createClient} from "redis";


type RedisConfig = {
    url?: string
    port?: number | string
    host?: string
    username?: string
    password?: string
}

const redisConfig: RedisConfig = {
    url: process.env.NITRO_REDIS_URL,
    port:
        process.env.NIRTO_REDIS_PORT || 6379,
    host:
        process.env.NITRO_REDIS_HOST || "127.0.0.1",
    username:
    process.env.NITRO_REDIS_USERNAME,
    password:
    process.env.NITRO_REDIS_PASSWORD
}

const client = createClient(redisConfig)


export default client