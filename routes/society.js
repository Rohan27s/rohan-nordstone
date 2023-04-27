import express from "express";
const router = express.Router();
// import Society from "../models/Society.js";
import SocietyController from "../controllers/societycontroller.js";

router.post('/societyadd',SocietyController.societyadd)
router.get('/societies',SocietyController.societies)
router.get('/societyfind/:id',SocietyController.societyfind)
router.put('/societyfind/:id',SocietyController.updateDocById)
router.delete('/societyfind/:id',SocietyController.dltDocById)

export default router
