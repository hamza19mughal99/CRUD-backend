import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/UserRoutes.js";
import "./db/Conn.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend is running in ${PORT}`);
})