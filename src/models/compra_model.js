// src/models/Compra.js
import { DataTypes, Model } from 'sequelize';
import sequelize from "../db/db.js"; 
import UserModel from './User_model.js'; 
import ProductModel from './Product_model.js'; 

class CompraModel extends Model {}

CompraModel.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Compra',
    timestamps: true,
  }
);

CompraModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
CompraModel.belongsTo(ProductModel, { foreignKey: 'productId', as: 'product' });    

export default CompraModel;
