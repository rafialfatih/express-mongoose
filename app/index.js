import express from 'express'
import mongoose from 'mongoose'

import config from './config/config'
import productsRoutes from './routes/products'
import morgan from './middlewares/morgan.middleware'
import logger from './utils/logger'

const app = express()

app.use(express.json())
app.use(morgan)

const start = async () => {
    try{
        await mongoose.connect(config.mongodb_uri, config.option)
        app.listen(config.port, () => logger.info(`Server is running at port ${config.port}`))
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

start()

app.use('/api/products', productsRoutes)
