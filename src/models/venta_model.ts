// src/models/Venta.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db.ts';
import UserModel from './User_model.ts'; 
import ProductModel from './Product_model.ts';


class VentaModel extends Model {}

VentaModel.init(
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
    tableName: 'Venta',
    timestamps: true,
  }
);

VentaModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
VentaModel.belongsTo(ProductModel, { foreignKey: 'productId', as: 'product' });

export default VentaModel;
