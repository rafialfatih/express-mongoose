import express from 'express'
import {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct 
} from '#/controllers/products.controller'

const router = express.Router()

router.get('/', getAllProducts)

router.get('/:productID', getProduct)

router.post('/', createProduct)

router.put('/:productID', updateProduct)

router.delete('/:productID', deleteProduct)

export default router