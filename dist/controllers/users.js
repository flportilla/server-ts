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
exports.deleteUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAndCountAll();
    res.json({
        ok: true,
        msg: 'getUsers',
        users
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    res.json({
        ok: true,
        msg: 'getUser',
        id,
        user
    });
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const data = {
        user_name: name,
        user_email: email,
        user_password: password
    };
    const salt = bcryptjs_1.default.genSaltSync();
    data.user_password = bcryptjs_1.default.hashSync(password, salt);
    const dbUser = new user_1.default(data);
    yield dbUser.save();
    res.json({
        ok: true,
        msg: 'createUser',
        dbUser
    });
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = user_1.default.update({ user_status: false }, { where: { id } });
    res.status(204).json({
        ok: true,
        msg: 'deleteUser',
        user
    });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map