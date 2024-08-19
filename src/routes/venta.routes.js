import { Router } from 'express';
import { getVentas, createVenta, getVentaById, updateVenta, deleteVenta
} from '../controllers/venta.controllers.js';

const router = Router();

router.get('/', getVentas )
router.get('/:id', getVentaById )
router.post('/', createVenta )
router.put('/:id', updateVenta )
router.delete('/:id', deleteVenta )

export default router;