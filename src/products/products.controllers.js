const Products = require('../models/products.models')

const findAllProducts = async() => {
    //? Your code here:
    const products = await Products.findAll()
    return products
}

const findProductById = async(id) => {
    //? Your code here:
    const data = await Products.findOne({
        where: {
            id: id,
        }
    })
    return data
}

const createProduct = async(productObj) => {
    //? Your code here:
    const newProduct = await Products.create({
        name: productObj.name,
        description: productObj.description || 'lorem Ipsum',
        price: productObj.price,
        stock: productObj.stock || 1
    })
    return newProduct
}

const updateProduct = async(id, productObj) => {
    //? Your code here:
    const selectedProduct = await Products.findOne({
        where: {
            id: id
        }
    })
    
    if(!selectedProduct) return null

    const modifiedProduct = await selectedProduct.update(productObj)
    return modifiedProduct
    
}

const deleteProduct = async(id) => {
    //? Your code here:
    const product = await Products.destroy({
        where: {
            id: id
        }
    })
    return product 

}

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
