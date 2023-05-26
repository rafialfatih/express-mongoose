import Product from "#/models/product.model";

const getAllProducts = async () => {
    try {
        const products = await Product.find()
        
        return products
    } catch (e) {
        throw Error('Error while retrieving product.')
    }
}

const getProduct = async (id) => {
    try {
        const product = await Product.findById(id)
        
        return product
    } catch (e) {
        throw Error('Error while retrieving product.')
    }
}

const createProduct = async (data) => {
    try {
        const product = await Product.create(data)
        
        return product
    } catch (e) {
        throw Error('Error while creating new product.')
    }
}

const updateProduct = async (id, data) => {
    try {
        const product = await Product.findByIdAndUpdate(id, data, { new: true })
        
        return product
    } catch (e) {
        throw Error('Error while updating product.')
    }
}

const deleteProduct = async (id) => {
    try {
        await Product.findByIdAndDelete(id)
    } catch (e) {
        throw Error('Error while deleting product.')
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}