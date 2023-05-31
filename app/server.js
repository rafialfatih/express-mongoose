import mongoose from 'mongoose'
import config from './config/config'
import logger from './utils/logger'

import app from './app'

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
