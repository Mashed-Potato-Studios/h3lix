//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  runtimeConfig: {
    mongodbUri: "mongodb://localhost:27017",
  }
});
