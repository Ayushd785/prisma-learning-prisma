import express from "express";
import type {Application} from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/authRoutes.js"
const app : Application = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        msg:"Backend server is running well"
    })
})


const startServer = async()=>{
    try{
        app.listen(3000,()=>{
            console.log("server is running on port 3000")
        })
    }catch(err){
        console.log("failed to run server", err);
        process.exit(1);
    }
};


app.use("/api/auth", authRoutes)

startServer();
