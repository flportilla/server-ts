import { NextFunction, Request, Response } from 'express';
import User from '../models/user'
import jwt from 'jsonwebtoken'

export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            msg: 'The token is invalid or missing'
        })
    }

    try {

        //get id from token
        const { id } = jwt.verify(token, process.env.SECRET || '');

        //search user on DB
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(401).json({
                msg: "Token invalid - NO EXISTING USER ON DB"
            })
        }

        //Validate active user
        if (!user?.user_status) {
            return res.status(401).json({
                msg: "Token invalid - INACTIVE USER"
            })
        }

        req.uid = uid
        req.user = user

        next();
    }

    catch (error) {
        console.error(error)

        res.status(401).json({
            msg: 'The token is invalid or missing'
        })
    }
}