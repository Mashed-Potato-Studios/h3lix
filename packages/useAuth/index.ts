import { defineEventHandler, H3Event, readBody } from 'h3';
import * as mongoose from 'mongoose';
import * as sqlClient from 'your-sql-client'; // Replace with your actual SQL client

async function login(email: string, password: string, dbType: string) {
    let user;

    // Fetch user from MongoDB
    if (dbType === "NoSQL") {
        const User = mongoose.model('User', new mongoose.Schema({email: String, password: String}));
        user = await User.getUserByEmail(email); // Replace with your own implementation
    }

    // Fetch user from SQL database
    else if (dbType === "SQL") {
        const User = sqlClient.define('User', {email: String, password: String}); // Replace with your own implementation
        user = await User.getUserByEmail(email);
    }

    if (!user) throw new Error("User not found");

    const isPasswordValid = user.comparePassword(password); // Replace with your own implementation
    if (!isPasswordValid) throw new Error("Invalid password");

    // Continue with your function logic...
}


export const useAuth = defineEventHandler(async (event: H3Event): Promise<void> => {
    
    const dbType = event.context.dbType;
    const data = await readBody<{ email: string; password: string }>(event);

    // Add your function logic here
    const { email, password } = data;

    // Call the login function with the appropriate parameters
    await login(email, password, dbType);
})