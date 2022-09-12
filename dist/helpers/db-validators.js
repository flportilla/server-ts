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
exports.duplicatedEmail = exports.isExistingUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const isExistingUser = (id = '') => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield user_1.default.findByPk(id);
    if (!existingUser) {
        throw new Error(`The user with the id: ${id} doesn't exist on DB`);
    }
});
exports.isExistingUser = isExistingUser;
const duplicatedEmail = (email = '') => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield user_1.default.findOne({
        where: { user_email: email, }
    });
    if (existingUser) {
        throw new Error(`The email: ${email} is already in use`);
    }
});
exports.duplicatedEmail = duplicatedEmail;
//# sourceMappingURL=db-validators.js.map