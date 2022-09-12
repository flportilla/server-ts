"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_1 = require("../controllers/users");
const db_validators_1 = require("../helpers/db-validators");
const field_validator_1 = require("../middleware/field-validator");
const router = (0, express_1.Router)();
router.get('/', [
    field_validator_1.fieldValidator
], users_1.getUsers);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.isExistingUser),
    field_validator_1.fieldValidator
], users_1.getUser);
router.post('/', [
    (0, express_validator_1.check)('email', 'email is missing').notEmpty(),
    (0, express_validator_1.check)('email', 'invalid email').isEmail(),
    (0, express_validator_1.check)('name', 'name is missing').notEmpty(),
    (0, express_validator_1.check)('password', 'password is missing').notEmpty(),
    (0, express_validator_1.check)('email').custom(db_validators_1.duplicatedEmail),
    field_validator_1.fieldValidator,
], users_1.createUser);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'id is missing').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.isExistingUser),
    field_validator_1.fieldValidator
], users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map