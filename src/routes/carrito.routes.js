import { Router } from 'express';
import {getCarritos, createCarrito, getCarritoById, updateCarrito, deleteCarrito} from '../controllers/carrito.controllers.js';
import {createCarritoValidation, updateCarritoValidation} from "../schema/carrito_validaciones.js"
import { validateSchema } from '../middlewares/validacionSchema.js';


const router = Router();

router.get('/', getCarritos )
router.get('/:id', getCarritoById )
router.post('/', createCarritoValidation, validateSchema, createCarrito )
router.put('/:id', updateCarritoValidation, validateSchema, updateCarrito)
router.delete('/:id', deleteCarrito)

export default router;