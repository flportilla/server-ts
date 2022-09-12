"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const User = config_1.default.define('User', {
    user_name: {
        type: sequelize_1.DataTypes.STRING
    },
    user_password: {
        type: sequelize_1.DataTypes.STRING
    },
    user_email: {
        type: sequelize_1.DataTypes.STRING
    },
    user_status: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
});
exports.default = User;
//# sourceMappingURL=user.js.map