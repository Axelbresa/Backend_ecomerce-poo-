import Product from "../models/Product_model.js";

class ProductService {
    constructor() { }

    async findAll() {
        return await Product.find();
    }


    async create(product) {
        return await Product.create(product);
    }

}

export default new ProductService()