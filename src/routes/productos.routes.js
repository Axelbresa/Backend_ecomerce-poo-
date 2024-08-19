import { Router } from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct, getProductoById} from '../controllers/productos.controllers.js';

const router = Router();

router.get('/', getProducts)
router.get('/:id', getProductoById)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


export default router;