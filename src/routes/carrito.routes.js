import { Router } from 'express';
import {getCarritos, createCarrito, getCarritoById, updateCarrito, deleteCarrito} from '../controllers/carrito.controllers.js';

const router = Router();

router.get('/', getCarritos )
router.get('/:id', getCarritoById )
router.post('/', createCarrito )
router.put('/:id', updateCarrito)
router.delete('/:id', deleteCarrito)

export default router;