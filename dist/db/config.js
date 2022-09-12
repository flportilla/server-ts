"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbUser = process.env.DB_USER || '';
const dbPassword = process.env.DB_PASS || '';
const dbName = process.env.DB_NAME || '';
const db = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: 'fl-databse.ck5xk1rmflq7.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
});
exports.default = db;
//# sourceMappingURL=config.js.map