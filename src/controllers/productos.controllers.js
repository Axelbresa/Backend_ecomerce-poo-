import ProductService from "../services/ProductService.js";

export const getProducts = async (req, res) => {
    try {
        const products = await ProductService.findAll();
        if (products.length === 0) {
          return res.status(404).json({ message: 'No se encontraron productos' });
        }
        return res.json(products);
      } catch (err) {
        return res.status(500).json({ message: 'Error al obtener productos', error: err.message });
      }
};

export const createProduct = async (req, res) => {
    try {
        await ProductService.create(req.body);
        return res.status(201).json({
            message: 'Producto creado'
        });
    } catch (err) {  // Use 'err' here instead of 'error'
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        });
    }
};

export const updateProduct = (req, res) => {
    return res.json({
        msg: 'All Products'
    });
};
