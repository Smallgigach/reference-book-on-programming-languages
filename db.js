import { Sequelize } from "sequelize";
import { config } from "dotenv";
config()
const sequelize = new Sequelize(
  "Telegramm-Bot",
  process.env.PG_USERNAME,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_LOCALHOST,
    port: 5432,
    dialect: "postgres",
  }
);
export default sequelize;
