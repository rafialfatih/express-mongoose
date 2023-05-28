import express from 'express'
import productsRoutes from './routes/products'
import morgan from './middlewares/morgan.middleware'

const app = express()

app.use(express.json())
app.use(morgan)

app.use('/api/products', productsRoutes)

export default app