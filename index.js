import express from "express"
import { connectDB } from "./config/db.js"
import routes from "./routes/routes.js";
import cors from "cors"

const app = express();
app.use(cors());
connectDB()

app.get("/", (req, res) => {
    res.send("CORS configurado correctamente");
});

app.use(express.json());
app.use('/api', routes);



const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});