import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

import userRouter from "./routes/userRouter";

app.use("/api/user", userRouter);

export default app;
