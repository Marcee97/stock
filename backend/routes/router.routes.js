import Router from "express";
import { historial, refresh, reserva, venta } from "../controllers/usuarios.controllers.js";

const router = Router();

router.get('/historial', historial)
router.post('/reserva', reserva)
router.post('/venta', venta)
router.get('/refresh', refresh)

export default router