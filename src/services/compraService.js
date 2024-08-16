// src/services/CompraService.js
import CompraModel from '../models/compra_model.js';

class CompraService {
  async findAll() {
    try {
      return await CompraModel.findAll({ include: ['user', 'product'] });
    } catch (err) {
      throw new Error('Error al obtener compras: ' + err.message);
    }
  }

  async findById(id) {
    try {
      return await CompraModel.findByPk(id, { include: ['user', 'product'] });
    } catch (err) {
      throw new Error('Error al obtener compra: ' + err.message);
    }
  }

  async create(compraData) {
    try {
      return await CompraModel.create(compraData);
    } catch (err) {
      throw new Error('Error al crear compra: ' + err.message);
    }
  }

  async update(id, compraData) {
    try {
      const compra = await CompraModel.findByPk(id);
      if (!compra) throw new Error('Compra no encontrada');
      return await compra.update(compraData);
    } catch (err) {
      throw new Error('Error al actualizar compra: ' + err.message);
    }
  }

  async delete(id) {
    try {
      const compra = await CompraModel.findByPk(id);
      if (!compra) throw new Error('Compra no encontrada');
      return await compra.destroy();
    } catch (err) {
      throw new Error('Error al eliminar compra: ' + err.message);
    }
  }
}

export default new CompraService();
