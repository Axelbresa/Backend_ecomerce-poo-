import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/productos.controllers.js';

const router = Router();

router.get('/', getProducts )
router.post('/', createProduct )

export default router;