import Router from "express";
import { add, historial } from "../controllers/usuarios.controllers.js";

const router = Router();

router.get('/historial', historial)
router.post('/add', add)

export default router