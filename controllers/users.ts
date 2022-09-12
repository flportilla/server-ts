import { Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';

export const getUsers = async (req: Request, res: Response) => {

    const users = await User.findAndCountAll()

    res.json({
        ok: true,
        msg: 'getUsers',
        users
    });
};
export const getUser = async (req: Request, res: Response) => {

    const { id } = req.params

    const user = await User.findByPk(id)

    res.json({
        ok: true,
        msg: 'getUser',
        id,
        user
    });
};

export const createUser = async (req: Request, res: Response) => {

    const {
        name,
        email,
        password
    } = req.body

    const data = {
        user_name: name,
        user_email: email,
        user_password: password
    }

    const salt = bcrypt.genSaltSync()
    data.user_password = bcrypt.hashSync(password, salt)

    const dbUser = new User(data)
    await dbUser.save()

    res.json({
        ok: true,
        msg: 'createUser',
        dbUser
    });
};

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params

    const user = User.update(
        { user_status: false },
        { where: { id } }
    )

    res.status(204).json({
        ok: true,
        msg: 'deleteUser',
        user
    });
};