import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'
import authRoute from "./routes/auth.js"

const app =  express();

app.use(cors({ origin : "http://localhost:5173"}));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute); 

app.get("/", async (req, res) => {
    res.status(200).json({ message : "Backend is Working" })
})

const PORT = 5000;
app.listen( PORT , ()  => {
    console.log(`Server is running on PORT : ${PORT}`)
})

export default app;