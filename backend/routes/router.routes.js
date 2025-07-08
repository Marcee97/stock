import Router from "express";
import { add, historial, reserva } from "../controllers/usuarios.controllers.js";

const router = Router();

router.get('/historial', historial)
router.post('/add', add)
router.post('/reserva', reserva)

export default router