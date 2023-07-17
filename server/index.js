import express  from "express";
import {Connection} from "./database/db.js";
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import router from "./routes/route.js";


dotenv.config();

const app=express();

app.use(cors());

app.use(bodyParser.json({limit:"100mb",extended:true}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({limit:"100mb",extended:true}));
app.use(express.json());





const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const PORT=8001;

 Connection(USERNAME,PASSWORD);

app.use('/',router)


app.listen(PORT,()=>{

    console.log(`server running on port ${PORT}`)
    

}
);









