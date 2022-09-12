import express, { Application } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import userRoutes from '../routes/user'
import db from '../db/config'

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'

        //initial methods
        this.dbConnection()
        this.middlewares()
        this.routes()
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes)
    }

    middlewares() {
        this.app.use(cors())

        this.app.use(express.json())

        this.app.use(express.static('public'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }

    async dbConnection() {
        try {

            await db.authenticate()
            console.log('database online')

        } catch (error) {
            console.log(error)

        }
    }
}

export default Server