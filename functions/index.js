/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


import { onRequest } from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config()
const stripeE = new stripe(process.env.STRIPE_KEY)
const app = express()
// app.use(cors(origin:true))

app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"siccessfull"
    })
})



app.listen(4500,()=>{
    console.log("server is running")
})




