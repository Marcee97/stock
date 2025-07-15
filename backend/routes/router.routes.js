import Router from "express";
import { getReservas, historial, refresh, reserva, venta } from "../controllers/usuarios.controllers.js";

const router = Router();

router.get('/historial', historial)
router.post('/reservas', reserva)
router.get('/upreservas', getReservas)
router.post('/venta', venta)
router.get('/refresh', refresh)

export default router