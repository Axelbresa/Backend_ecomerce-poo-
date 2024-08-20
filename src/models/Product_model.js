import { DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js"; // Asegúrate de que la conexión a la base de datos esté bien importada
import User from "./User_model.js"; 

class Product extends Model {}

Product.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: "Product",
  tableName: "Product",
  timestamps: true,
});

User.hasMany(Product, { foreignKey: 'userId', as: 'product' });
Product.belongsTo(User, { foreignKey: 'id', as: 'product' });

export default Product;
