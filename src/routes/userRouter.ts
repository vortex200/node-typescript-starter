import express from "express";
const router = express.Router();

import { getExampleString } from "../controllers/userController";
import authMiddleware from "../middleware/auth";

router.get("/", authMiddleware, getExampleString);

export default router;
