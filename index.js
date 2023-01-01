import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDb from './utils/mongo.js';
import society from './routes/society.js';

const app = express()
const port =  process.env.PORT || '5000' // push krne s pehle yeh thik krna h *
const DATABASE_URL = process.env.DATABASE_URL || "";

connectDb(DATABASE_URL);
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hey");
});
app.use("/api",society);
app.listen(port,()=>{
    console.log(`ser listening at http://localhost:${port}`)
})