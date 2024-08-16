import { Router } from 'express';
import {getCarritos, createCarrito} from '../controllers/carrito.controllers.js';

const router = Router();

router.get('/', getCarritos )
router.post('/', createCarrito )

export default router;