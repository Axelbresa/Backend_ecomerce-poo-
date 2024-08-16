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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id"
    }
  }
}, {
  sequelize,
  modelName: "Product",
  tableName: "Product",
  timestamps: true,
});

export default Product;
