import express from "express";
const router = express.Router();
// import Society from "../models/Society.js";
import EventController from "../controllers/eventcontroller.js";

router.post('/eventadd',EventController.eventadd)
router.get('/allevent',EventController.allevent)
router.get('/eventfind/:id',EventController.eventfind)
router.put('/eventfind/:id',EventController.updateDocById)
router.delete('/eventfind/:id',EventController.dltDocById)


export default router