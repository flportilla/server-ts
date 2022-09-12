import { DataTypes } from 'sequelize'
import db from '../db/config'

const User = db.define('User', {
    user_name: {
        type: DataTypes.STRING
    },

    user_password: {
        type: DataTypes.STRING
    },

    user_email: {
        type: DataTypes.STRING
    },

    user_status: {
        type: DataTypes.BOOLEAN
    },

})

export default User