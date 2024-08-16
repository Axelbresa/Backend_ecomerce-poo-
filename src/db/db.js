// dbConnection.js
import { Sequelize } from "sequelize";
import {DATABASE, USERNAME, PASSWORD, HOST, DIALECT} from "../config/conf.js";

const sequelize = new Sequelize(
    DATABASE,
    USERNAME, 
    PASSWORD,
    {
        host: HOST,
        dialect: DIALECT,
    }
);

sequelize.sync({ force: true })
  .then(() => {
    console.log("Tablas sincronizadas");
  })
  .catch(err => {
    console.error("Error al sincronizar tablas:", err);
  });


export const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Nos hemos conectado a la base de datos');
    } catch (err) {
        console.log('Error al conectarse a la base de datos', err);
        process.exit(1);
    }
};

export default sequelize;
