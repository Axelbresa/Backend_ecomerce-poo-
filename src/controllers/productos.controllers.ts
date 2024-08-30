import { Response, Request } from "express";
import ProductService from "../services/ProductService.ts";

export const getProducts = async (req:Request, res: Response ) => {
    try {
        const products = await ProductService.findAll();
        if (products.length === 0) {
          return res.status(404).json({ message: 'No se encontraron productos' });
        }
        return res.json(products);
      } catch (err:any) {
        return res.status(500).json({ message: 'Error al obtener productos', error: err.message });
      }
};

export const getProductoById = async (req:Request, res:Response) => {
    try {
      const producto = await ProductService.findById(req.params.id);
      if (!producto) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      return res.json(producto);
    } catch (err:any) {
      return res.status(500).json({ message: 'Error al obtener producto', error: err.message });
    }
  };

export const createProduct = async (req:Request, res:Response) => {
    try {
        await ProductService.create(req.body);
        return res.status(201).json({
            message: 'Producto creado', ProductService
        });
    } catch (err:any) { 
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        });
    }
};

export const updateProduct = async (req:Request, res:Response) => {

    try {
      const producto = await ProductService.update(req.params.id, req.body);
      return res.json({ message: 'Producto actualizado', producto });
    } catch (err:any) {
      return res.status(500).json({ message: 'Error al actualizar producto', error: err.message });
    }
  };
  
  export const deleteProduct = async (req:Request, res:Response) => {
    try {
      await ProductService.delete(req.params.id);
      return res.json({ message: 'Producto eliminado' });
    } catch (err:any) {
      return res.status(500).json({ message: 'Error al eliminar producto', error: err.message });
    }
  };
