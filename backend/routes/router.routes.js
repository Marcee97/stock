import Router from "express";
import { completarReserva, getReservas, historial, refresh, reserva, venta } from "../controllers/usuarios.controllers.js";

const router = Router();

router.get('/historial', historial)
router.post('/reservas', reserva)
router.get('/upreservas', getReservas)
router.post('/venta', venta)
router.get('/refresh', refresh)
router.post('/completar-reserva', completarReserva)


export default router