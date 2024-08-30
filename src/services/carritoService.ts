// src/services/CarritoService.js
import CarritoModel from '../models/Carrito_model.ts';

interface Carrito{
  id: number
  quantity: number,
  totalAmount: number
}

class CarritoService {
  async findAll() {
    try {
      return await CarritoModel.findAll({ include: ['user', 'product'] });
    } catch (err:any) {
      throw new Error('Error al obtener carritos: ' + err.message);
    }
  }

  async findById(id:Carrito) {
    try {
      return await CarritoModel.findByPk(id, { include: ['user', 'product'] });
    } catch (err:any) {
      throw new Error('Error al obtener carrito: ' + err.message);
    }
  }

  async create(carritoData:Carrito) {
    try {
      return await CarritoModel.create(carritoData);
    } catch (err:any) {
      throw new Error('Error al crear carrito: ' + err.message);
    }
  }

  async update(id, carritoData: Carrito) {
    try {
      const carrito = await CarritoModel.findByPk(id);
      if (!carrito) throw new Error('Carrito no encontrado');
      return await carrito.update(carritoData);
    } catch (err:any) {
      throw new Error('Error al actualizar carrito: ' + err.message);
    }
  }

  async delete() {
    try {
      const carrito = await CarritoModel.findByPk(id);
      if (!carrito) throw new Error('Carrito no encontrado');
      return await carrito.destroy();
    } catch (err:any) {
      throw new Error('Error al eliminar carrito: ' + err.message);
    }
  }
}

export default new CarritoService();
