import { Router } from 'express';
import { getVentas, createVenta, getVentaById, updateVenta, deleteVenta
} from '../controllers/venta.controllers.js';
import {createVentaValidation, updateVentaValidation} from "../schema/venta_valiaciones.js"
import { validateSchema } from '../middlewares/validacionSchema.js';

const router = Router();

router.get('/', getVentas )
router.get('/:id', getVentaById )
router.post('/', createVentaValidation, validateSchema,  createVenta )
router.put('/:id', updateVentaValidation, validateSchema,  updateVenta )
router.delete('/:id', deleteVenta )

export default router;