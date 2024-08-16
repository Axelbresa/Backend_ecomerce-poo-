import { DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js"; 

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("cliente", "vendedor", "admin"),
    defaultValue: "cliente",
  }
}, {
  sequelize,
  modelName: "User",
  timestamps: true,
});

export default User;
