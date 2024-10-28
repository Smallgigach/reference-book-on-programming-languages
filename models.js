import { DataTypes, Sequelize, STRING } from "sequelize";
import sequelize from "./db.js";
export const language = sequelize.define("language", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  keywords: { type: Sequelize.STRING() },
  textLink: { type: DataTypes.BLOB, allowNull: true },
});
export const InlineQueryStateText = sequelize.define("inline", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  inlineTextStatic: { type: DataTypes.BLOB, allowNull: true },
});
