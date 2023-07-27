import express from "express";
const router = express.Router();
import CalculateController from "../controllers/calculatecontroller.js";

router.post('/ans',CalculateController.calculate)
export default router