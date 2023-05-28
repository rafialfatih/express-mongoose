import Product from "#/models/product.model";

const getAllProducts = async () => {
    const products = await Product.find()

    return products
}

const getProduct = async (id) => {
    const product = await Product.findById(id)
        
    return product
}

const createProduct = async (data) => {
    const product = await Product.create(data)

    return product
}

const updateProduct = async (id, data) => {
    const product = await Product.findByIdAndUpdate(id, data, { new: true })
        
    return product
}

const deleteProduct = async (id) => {
    const product = await Product.findById(id)

    if (!product) return { status: 404 }

    return await product.deleteOne()
}

export {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}