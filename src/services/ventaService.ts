// src/services/VentaService.js
import VentaModel from '../models/venta_model.js';

class VentaService {
  async findAll() {
    try {
      return await VentaModel.findAll({ include: ['user', 'product'] });
    } catch (err) {
      throw new Error('Error al obtener ventas: ' + err.message);
    }
  }

  async findById(id) {
    try {
      return await VentaModel.findByPk(id, { include: ['user', 'product'] });
    } catch (err) {
      throw new Error('Error al obtener venta: ' + err.message);
    }
  }

  async create(ventaData) {
    try {
      return await VentaModel.create(ventaData);
    } catch (err) {
      throw new Error('Error al crear venta: ' + err.message);
    }
  }

  async update(id, ventaData) {
    try {
      const venta = await VentaModel.findByPk(id);
      if (!venta) throw new Error('Venta no encontrada');
      return await venta.update(ventaData);
    } catch (err) {
      throw new Error('Error al actualizar venta: ' + err.message);
    }
  }

  async delete(id) {
    try {
      const venta = await VentaModel.findByPk(id);
      if (!venta) throw new Error('Venta no encontrada');
      return await venta.destroy();
    } catch (err) {
      throw new Error('Error al eliminar venta: ' + err.message);
    }
  }
}

export default new VentaService();
