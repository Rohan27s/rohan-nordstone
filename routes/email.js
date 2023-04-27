import express from "express";
const router = express.Router();
// import Society from "../models/Society.js";
import EmailController from "../controllers/emailcontroller.js";

router.post('/email',EmailController.email)
router.get('/allemail',EmailController.allemail)
router.put('/:id',EmailController.updateDocById)
router.delete('/:id',EmailController.dltDocById)
// router.get('/eventfind/:id',EventController.eventfind)


export default router