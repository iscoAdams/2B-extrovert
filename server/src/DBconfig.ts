import { Sequelize } from "sequelize-typescript";
import { User } from "./models/User";

const sequelize = new Sequelize(
  process.env.DATABASE_URL
  /* process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
  } */
);

sequelize.addModels([__dirname + "/models"]);

export { sequelize };
