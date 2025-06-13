import express from "express";
import authroutes from "./Routes/auth.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import productRoutes from "./Routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log("server is running");
  connectDB();
});
