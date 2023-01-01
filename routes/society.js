import express from "express";
const router = express.Router();
// import Society from "../models/Society.js";
import SocietyController from "../controllers/societycontroller.js";

router.post('/societyadd',SocietyController.societyadd)
router.get('/societies',SocietyController.societies)
router.get('/societyfind/:id',SocietyController.societyfind)


export default router
