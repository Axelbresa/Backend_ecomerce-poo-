import { Router } from 'express';
import {getCompras, createCompra, getCompraById, updateCompra, deleteCompra } from '../controllers/compra.controllers.js';
import {createCompraValidation, updateCompraValidation} from "../schema/compra_validaciones.js"
import { validateSchema } from '../middlewares/validacionSchema.js';


const router = Router();

router.get('/', getCompras )
router.get('/:id', getCompraById )
router.post('/', createCompraValidation, validateSchema,  createCompra )
router.put('/:id', updateCompraValidation, validateSchema, updateCompra )
router.delete('/:id', deleteCompra )

export default router;