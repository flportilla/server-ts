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
exports.credentialsValidator = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const credentialsValidator = (req = Request, res = Response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    //Verify if email exist
    const user = yield user_1.default.findOne({
        where: {
            user_email: email
        }
    });
    if (!user) {
        return res.status(400).json({
            ok: false,
            msg: "User or password is incorrect - wrong credentials"
        });
    }
    //Verify password
    const isValidPassword = bcryptjs_1.default.compareSync(password, user.password);
    if (!isValidPassword) {
        return res.status(400).json({
            ok: false,
            msg: "User or password is incorrect - wrong credentials"
        });
    }
    req.user = user;
    next();
});
exports.credentialsValidator = credentialsValidator;
//# sourceMappingURL=credentials-validator.js.map