import { Router } from 'express';
import {getCompras, createCompra, getCompraById, updateCompra, deleteCompra } from '../controllers/compra.controllers.js';

const router = Router();

router.get('/', getCompras )
router.get('/:id', getCompraById )
router.post('/', createCompra )
router.put('/:id', updateCompra )
router.delete('/:id', deleteCompra )

export default router;