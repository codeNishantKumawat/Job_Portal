import express from 'express';
import dotenv from 'dotenv';
import dbconnect from './db/dbconfig.js';
dotenv.config();

const app = express();

dbconnect()
console.log(process.env.PORT);




app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
});