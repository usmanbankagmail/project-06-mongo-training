import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB() {

    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Congratulations! MongoDB Connected Successfully!");
        process.exit(0);
    }

    catch(error) {
        console.log("Sorry, MongoDB couldn't connect due to the following error:");
        console.error(error.message);
        process.exit(1);
    }
}