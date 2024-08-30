// src/models/Carrito.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.ts';
import UserModel from './User_model.ts'; 
import ProductModel from './Product_model.ts'; 

class CarritoModel extends Model {}

CarritoModel.init(
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
    tableName: 'Carrito',
    timestamps: true,
  }
);

CarritoModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
CarritoModel.belongsTo(ProductModel, { foreignKey: 'productId', as: 'product' }); 

export default CarritoModel;
