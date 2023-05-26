import 'dotenv/config'

module.exports = {
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URL,
    option: {
        autoIndex: false,
    } 
}