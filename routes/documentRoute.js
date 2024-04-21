 
import documentController from "../controllers/documentController.js";

import express from "express";
const router = express.Router();


router.post('/create',  documentController.createDoc);  


export default router;