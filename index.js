import express from "express"
import { connectDB } from "./config/db.js"
import routes from "./routes/routes.js";


const app = express();
connectDB()

app.use(express.json());
app.use('/api', routes);



app.listen(3000, ()=>{
    console.log("server running 3000")
})