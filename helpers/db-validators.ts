import { Request } from "express"
import User from "../models/user"

export const isExistingUser = async (id: string = '') => {

    const existingUser = await User.findByPk(id)

    if (!existingUser) {
        throw new Error(`The user with the id: ${id} doesn't exist on DB`)
    }
}

export const duplicatedEmail = async (email: string = '') => {

    const existingUser = await User.findOne(
        {
            where: { user_email: email, }
        })
    if (existingUser) {
        throw new Error(`The email: ${email} is already in use`)
    }
}