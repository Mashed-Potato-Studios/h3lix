import {defineNitroPlugin} from "#imports";
import * as mongoose from "mongoose";
import {Connection, Mongoose, MongooseOptions, Schema,} from "mongoose"


export interface useMongooseOptions<T, M = MongooseOptions, _D = any> {
    options?: MongooseOptions;
    bufferCommands: boolean;
    auth: string;
    dbName: string;
    serverSelectionTimeoutMS: number;
    callback: (err: Error, data: T) => void;

}

export type DiscriminatorOptions = {
    name: string;
    schema: Schema;
    value?: string;
};

export type ModelDefinition = {
    name: string;
    schema: any;
    collection?: string;
    discriminators?: DiscriminatorOptions[];
};

/**
 * Creates mongoose providers.
 *
 * @param {string} [connectionName='default'] - The name of the connection.
 * @param {ModelDefinition[]} [options=[]] - An array of model definitions.
 * @return {Array} An array of provider objects containing the "provide" and "useNitroWorker" properties.
 */
export function createMongooseProviders(
    connectionName: string = 'default',
    options: ModelDefinition[] = [],
): { provide: string; useNitroWorker: () => Promise<Connection> }[] {

    return options.map(option => {
        const dbname = option.collection || option.name;

        return {
            provide: dbname,
            useNitroWorker: async (): Promise<Connection> => {
               try {
                   const connectionOption: Partial<MongooseOptions> = {
                       // @ts-ignore
                       dbName: dbname,
                       // Add more options here as per requirements
                   };
                   const connection: Connection = mongoose.createConnection(connectionName, connectionOption);
                   const schema = new Schema(option.schema);
                   connection.model(option.name, schema);

                   if (option.discriminators) {
                       option.discriminators.forEach((discriminatorOption) => {
                           // @ts-ignore
                           const discriminatorSchema = new Schema(discriminatorOption.schema);
                           schema.discriminator(discriminatorOption.name, discriminatorSchema);
                       });
                   }

                   return connection;
               } catch (error) {
                   console.error("Mongoose error: ", error)
               }
            },
        };
    });
}


export const useMongoose = defineNitroPlugin(async (nitro) => {
    try {

        // mongoose.connection.('connected', () => console.log("Connected"))
        // mongoose.connection.on('disconnected', () => console.log("Disconnected"))
        await mongoose.connect(process.env.MONGODB_URI, {}).then(() => console.log("Connected"))
    } catch (error) {
        console.error(error);
    }
})


const createMongooseSchema = (...args: unknown[]) => new Schema({

})