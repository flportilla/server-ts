import { Router } from 'express'
import { check } from 'express-validator';
import { getUsers, getUser, deleteUser, createUser } from '../controllers/users';
import { duplicatedEmail, isExistingUser } from '../helpers/db-validators';
import { fieldValidator } from '../middleware/field-validator';

const router = Router()

router.get(
    '/',
    [
        fieldValidator
    ],
    getUsers)

router.get(
    '/:id',
    [
        check('id').custom(isExistingUser),
        fieldValidator
    ],
    getUser)

router.post(
    '/',
    [
        check('email', 'email is missing').notEmpty(),
        check('email', 'invalid email').isEmail(),
        check('name', 'name is missing').notEmpty(),
        check('password', 'password is missing').notEmpty(),
        check('email').custom(duplicatedEmail),
        fieldValidator,
    ],
    createUser)

router.delete(
    '/:id',
    [
        check('id', 'id is missing').notEmpty(),
        check('id').custom(isExistingUser),
        fieldValidator
    ],
    deleteUser)

export default router