import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.js';
import CarritoModel from "../models/Carrito_model.js"
import VentaModel from "../models/venta_model.js"
import  CompraModel from "../models/compra_model.js"
import ProductModel from "../models/Product_model.js"
import UserModel from "../models/User_model.js"

export function relaciones(){
    // VentaModel.belongsTo(ProductModel, { foreignKey: 'productId', as: 'product' });
    // VentaModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });

    // UserModel.hasMany(ProductModel, { foreignKey: 'userId', as: 'product' });
    // ProductModel.belongsTo(UserModel, {foreignKey: "id", as: 'user'});
    
    // CarritoModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
    // CarritoModel.belongsTo(ProductModel, { foreignKey: 'productId', as: 'product' }); 
    
    // CompraModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
    // CompraModel.belongsTo(ProductModel, { foreignKey: 'productId', as: 'product' });    
}