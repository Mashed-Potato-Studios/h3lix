import { useMongoose } from "h3lix/integrations/useMongoose";

// plugins/test.ts
export default defineNitroPlugin(async (nitroApp) => {
    console.log('Nitro plugin')
    useMongoose(nitroApp)
})
