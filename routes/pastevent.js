import express from "express";
const router = express.Router();
// import Society from "../models/Society.js";
import PastEventController from "../controllers/pasteventcontroller.js";

router.post('/pasteventadd',PastEventController.pasteventadd)
router.get('/allpastevent',PastEventController.allpastevent)
router.get('/pasteventfind/:id',PastEventController.pasteventfind)
router.put('/pasteventfind/:id',PastEventController.updateDocById)
router.delete('/pasteventfind/:id',PastEventController.dltDocById)

export default router