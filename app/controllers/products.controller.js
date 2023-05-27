import * as productService from '#/services/products.service'
import logger from '#/utils/logger'

const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts()

    if (products.length == 0) {
        logger.warn('Data not found!')
        return res.status(204).json({
            status: 204,
            message: "Data is empty"
        })
    }

    return res.status(200).json({
        status: 200,
        data: products,
        message: "Products successfully retrieved."
    })
}
    
const getProduct = async (req, res) => {
    const product = await productService.getProduct(req.params.productID)
    
    if(!product) {
        logger.warn('Data is empty!')
        return res.status(404).json({
            status: 404,
            message: 'Product not found.'
        })
    }
    
    logger.info('Data is OK!')

    return res.status(200).json({
        status: 200,
        data: product,
        message: "Product successfully retrieved."
    })
}

const createProduct = async (req, res) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    }
    
    const product = await productService.createProduct(newProduct)
    logger.info('Data is created!')

    return res.status(201).json({
        status: 201,
        data: product,
        message: 'Product has been added successfully!'
    })
}

const updateProduct = async (req, res) => {
    const { productID } = req.params
    const updatedProduct = {
        name: req.body.name,
        price: req.body.price
    }

    const product = await productService.updateProduct(productID, updatedProduct)
    logger.info('Data is updated!')
    
    if (!product) {
        logger.info('Data not found!')
        return res.status(404).json({
            status: 404,
            message: 'Product not found!'
        })
    }

    return res.status(200).json({
        status: 200,
        data: product,
        message: 'Product has been updated successfully!'
    })
}

const deleteProduct = async (req, res) => {
    const { productID } = req.params
    
    await productService.deleteProduct(productID)
    logger.info('Data is deleted!')
    
    return res.status(200).json({
        status: 200,
        message: 'Product has been deleted successfully!'
    })
}

export {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}