import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

let mongo = null

const connectDB = async () => {
  mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

const dropDB = async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongo.stop()
  }
}

const dropCollection = async () => {
    if (mongo) {
      const collections = await mongoose.connection.db.collections()
      for (let collection of collections) {
        await collection.remove
      }
    }
}

export {
  connectDB,
  dropDB,
  dropCollection
}
