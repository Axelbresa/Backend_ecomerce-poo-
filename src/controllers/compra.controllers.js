// src/controllers/CompraController.js
import CompraService from '../services/compraService.js';
// import { validationResult } from 'express-validator';

export const getCompras = async (req, res) => {
  try {
    const compras = await CompraService.findAll();
    if (compras.length === 0) {
      return res.status(404).json({ message: 'No se encontraron compras' });
    }
    return res.json(compras);
  } catch (err) {
    return res.status(500).json({ message: 'Error al obtener compras', error: err.message });
  }
};

export const getCompraById = async (req, res) => {
  try {
    const compra = await CompraService.findById(req.params.id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    return res.json(compra);
  } catch (err) {
    return res.status(500).json({ message: 'Error al obtener compra', error: err.message });
  }
};

export const createCompra = async (req, res) => {
  try {
    const compra = await CompraService.create(req.body);
    return res.status(201).json({ message: 'Compra creada', compra });
  } catch (err) {
    return res.status(500).json({ message: 'Error al crear compra', error: err.message });
  }
};

export const updateCompra = async (req, res) => {
  try {
    const compra = await CompraService.update(req.params.id, req.body);
    return res.json({ message: 'Compra actualizada', compra });
  } catch (err) {
    return res.status(500).json({ message: 'Error al actualizar compra', error: err.message });
  }
};

export const deleteCompra = async (req, res) => {
  try {
    await CompraService.delete(req.params.id);
    return res.json({ message: 'Compra eliminada' });
  } catch (err) {
    return res.status(500).json({ message: 'Error al eliminar compra', error: err.message });
  }
};
