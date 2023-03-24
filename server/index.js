import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter";
import cors from "cors"

const app = express();
app.use(express.json())
app.use(cors())
app.use("/api/user",userRouter)

mongoose
  .connect(
    "mongodb+srv://vishnusathyanathan:PEHXcnjwwSOa39PN@cluster0.ccfwl9v.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .catch(() =>
    console.log("Connected to the data base and listening to port 5000")
  );


//PEHXcnjwwSOa39PN
