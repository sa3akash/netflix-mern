import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import {customErrorHandler} from "./middlewares/customErrorHandler.js";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// medleware
app.use("/api", router)

app.use(cors({origin: "http://localhost:3000", credentials: true}))

// connect to the database
mongoose.connect(process.env.MONGO_URI)
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("DB connected...");
  });

  // custom error handler
  app.use(customErrorHandler)

  const port = process.env.PORT || 5000;
  app.listen(port, ()=>console.log(`Server is running on port ${port}`));