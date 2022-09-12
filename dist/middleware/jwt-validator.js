"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            msg: 'The token is invalid or missing'
        });
    }
    try {
        //get id from token
        const { id } = jsonwebtoken_1.default.verify(token, process.env.SECRET || '');
        //search user on DB
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(401).json({
                msg: "Token invalid - NO EXISTING USER ON DB"
            });
        }
        //Validate active user
        if (!(user === null || user === void 0 ? void 0 : user.user_status)) {
            return res.status(401).json({
                msg: "Token invalid - INACTIVE USER"
            });
        }
        req.uid = uid;
        req.user = user;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(401).json({
            msg: 'The token is invalid or missing'
        });
    }
});
exports.validateJWT = validateJWT;
//# sourceMappingURL=jwt-validator.js.map