import { Router } from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct, getProductoById} from '../controllers/productos.controllers.js';
import {validateSchema} from "../middlewares/validacionSchema.js"
import {productCreateValidations, productUpdateValidations} from "../schema/product_validaciones.js"

const router = Router();

router.get('/', getProducts)
router.get('/:id', getProductoById)
router.post('/', productCreateValidations, validateSchema, createProduct)
router.put('/:id', productUpdateValidations, validateSchema, updateProduct)
router.delete('/:id', deleteProduct)


export default router;