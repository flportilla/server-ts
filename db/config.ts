import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const dbUser = process.env.DB_USER || ''
const dbPassword = process.env.DB_PASS || ''
const dbName = process.env.DB_NAME || ''

const db = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'fl-databse.ck5xk1rmflq7.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
})

export default db