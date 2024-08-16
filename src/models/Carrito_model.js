// src/models/Carrito.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.js';
import UserModel from './User_model.js'; // Asumiendo que el modelo de usuario está en 'UserModel.js'
import ProductModel from './Product_model.js'; // Asumiendo que el modelo de producto está en 'ProductModel.js'

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

// Relaciones
CarritoModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
CarritoModel.belongsTo(ProductModel, { foreignKey: 'productId', as: 'product' });

export default CarritoModel;
