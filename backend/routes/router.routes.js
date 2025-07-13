import Router from "express";
import { historial, reserva, venta } from "../controllers/usuarios.controllers.js";

const router = Router();

router.get('/historial', historial)
router.post('/reserva', reserva)
router.post('/venta', venta)

export default router