// src/controllers/CarritoController.js
import CarritoService from '../services/carritoService.js';
// import { validationResult } from 'express-validator';

export const getCarritos = async (req, res) => {
  try {
    const carritos = await CarritoService.findAll();
    if (carritos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron carritos' });
    }
    return res.json(carritos);
  } catch (err) {
    return res.status(500).json({ message: 'Error al obtener carritos', error: err.message });
  }
};

export const getCarritoById = async (req, res) => {
  try {
    const carrito = await CarritoService.findById(req.params.id);
    if (!carrito) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }
    return res.json(carrito);
  } catch (err) {
    return res.status(500).json({ message: 'Error al obtener carrito', error: err.message });
  }
};

export const createCarrito = async (req, res) => {
  try {
    const carrito = await CarritoService.create(req.body);
    return res.status(201).json({ message: 'Carrito creado', carrito });
  } catch (err) {
    return res.status(500).json({ message: 'Error al crear carrito', error: err.message });
  }
};

export const updateCarrito = async (req, res) => {

  try {
    const carrito = await CarritoService.update(req.params.id, req.body);
    return res.json({ message: 'Carrito actualizado', carrito });
  } catch (err) {
    return res.status(500).json({ message: 'Error al actualizar carrito', error: err.message });
  }
};

export const deleteCarrito = async (req, res) => {
  try {
    await CarritoService.delete(req.params.id);
    return res.json({ message: 'Carrito eliminado' });
  } catch (err) {
    return res.status(500).json({ message: 'Error al eliminar carrito', error: err.message });
  }
};
