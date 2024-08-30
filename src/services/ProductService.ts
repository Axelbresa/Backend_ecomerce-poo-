import Product from "../models/Product_model.js";

class ProductService {
    async findAll() {
    try{
        return await Product.findAll();
    }catch (err) {
        throw new Error('Error al obtener los productos: ' + err.message);
    }
}

async findById(id) {
    try {
      return await Product.findByPk(id);
    } catch (err) {
      throw new Error('Error al obtener producto: ' + err.message);
    }
  }

    async create(product) {
        return await Product.create(product);
    }

    async update(id, productoData) {
        try {
          const producto = await Product.findByPk(id);
          if (!producto) throw new Error('Producto no encontrado');
          return await producto.update(productoData);
        } catch (err) {
          throw new Error('Error al actualizar el producto: ' + err.message);
        }
      }

      async delete(id) {
        try {
          const producto = await Product.findByPk(id);
          if (!producto) throw new Error('Producto no encontrado');
          return await producto.destroy();
        } catch (err) {
          throw new Error('Error al eliminar el producto: ' + err.message);
        }
      }
}

export default new ProductService()