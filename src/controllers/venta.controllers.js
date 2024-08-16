// src/controllers/VentaController.js
import VentaService from '../services/ventaService.js';
// import { validationResult } from 'express-validator';

export const getVentas = async (req, res) => {
  try {
    const ventas = await VentaService.findAll();
    if (ventas.length === 0) {
      return res.status(404).json({ message: 'No se encontraron ventas' });
    }
    return res.json(ventas);
  } catch (err) {
    return res.status(500).json({ message: 'Error al obtener ventas', error: err.message });
  }
};

export const getVentaById = async (req, res) => {
  try {
    const venta = await VentaService.findById(req.params.id);
    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }
    return res.json(venta);
  } catch (err) {
    return res.status(500).json({ message: 'Error al obtener venta', error: err.message });
  }
};

export const createVenta = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const venta = await VentaService.create(req.body);
    return res.status(201).json({ message: 'venta creada', venta });
  } catch (err) {
    return res.status(500).json({ message: 'Error al realizar la venta', error: err.message });
  }
}
