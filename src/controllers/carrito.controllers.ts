// src/controllers/CarritoController.js
import { Request, Response } from 'express';
import CarritoService from '../services/carritoService.ts';

export const getCarritos = async (req:Request, res: Response) => {
  try {
    const carritos = await CarritoService.findAll();
    if (carritos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron carritos' });
    }
    return res.json(carritos);
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al obtener carritos', error: err.message });
  }
};

export const getCarritoById = async (req:Request, res: Response) => {
  try {
    const carrito = await CarritoService.findById(req.params.id);
    if (!carrito) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }
    return res.json(carrito);
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al obtener carrito', error: err.message });
  }
};

export const createCarrito = async (req:Request, res: Response) => {
  try {
    const carrito = await CarritoService.create(req.body);
    return res.status(201).json({ message: 'Carrito creado', carrito });
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al crear carrito', error: err.message });
  }
};

export const updateCarrito = async (req:Request, res: Response) => {

  try {
    const carrito = await CarritoService.update(req.params.id, req.body);
    return res.json({ message: 'Carrito actualizado', carrito });
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al actualizar carrito', error: err.message });
  }
};

export const deleteCarrito = async (req:Request, res: Response) => {
  try {
    await CarritoService.delete(req.params.id);
    return res.json({ message: 'Carrito eliminado' });
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al eliminar carrito', error: err.message });
  }
};
