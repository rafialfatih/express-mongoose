import express from 'express'
import mongoose from "mongoose"

import config from './config/config'
import productsRoutes from './routes/products'

const app = express()

app.use(express.json())

const start = async () => {
    try{
        await mongoose.connect(config.mongodb_uri, config.option)
        app.listen(config.port, () => console.log(`[server] Server is running at port ${config.port}`))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

start()

app.use('/api/products', productsRoutes)
