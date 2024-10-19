import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
	'telega_bot',
	'postgres',
	'456ghj000',
	 {
		host: 'localhost',
		port: 5432,
		dialect: 'postgres'
	 }
)
export default sequelize