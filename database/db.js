import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_LOCAL);

        console.log('Database has been accessed!')
    } catch (error) {
        console.log(`You ran into an oopsi! ${error.message}`);
    }
}