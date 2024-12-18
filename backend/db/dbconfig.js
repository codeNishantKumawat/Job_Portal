import mongoose from "mongoose";
import dotenv from 'dotenv';
import chalk from "chalk";
dotenv.config();

const dbconnect = async () => {
    try {
         await mongoose.connect(process.env.MONGODB_URI)
        console.log(chalk.blue("Connected to MongoDB"))
    } catch (error) {
        console.log(error)
    }
}

export default dbconnect;