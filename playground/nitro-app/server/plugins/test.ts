import {useMongoose} from "h3lix/integrations/useMongoose"
import useRedis from "h3lix/packages/useRedis"

// plugins/test.ts
export default defineNitroPlugin(async (nitroApp) => {
    console.log(nitroApp)
    console.log('Nitro plugin')
//    useMongoose(nitroApp)
    useRedis(nitroApp)
})
