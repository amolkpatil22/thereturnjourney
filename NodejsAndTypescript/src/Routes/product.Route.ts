import express from "express"

interface data {
    id: Number,
    productName: string,
    brand: string,
    category: string
}

let data: data[] = [
    { id: 54512231, productName: "iphone", brand: "apple", category: "electronics" },
    { id: 54512212, productName: "iphone", brand: "apple", category: "electronics" }
]

const productRoute = express.Router()

productRoute.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send({
        status: 'success',
        message: 'Retrieved all products successfully.',
        data: data,
    })
})

productRoute.get("/:id", (req: express.Request, res: express.Response) => {
    const { id } = req.params
    let product = data.find((item) => Number(id) == item.id)
    if (product) {
        res.status(200).send({
            status: 'success',
            message: 'Retrieved product details.',
            data: product,
        })
    }
    else {
        res.status(200).send({
            status: 'failed',
            message: 'Product not found',
        })
    }
})


productRoute.post("/", (req: express.Request, res: express.Response) => {
    let newproduct = { ...req.body, id: Math.floor(Math.random() * 1000000000) }
    data.push(newproduct)

    res.status(200).send({
        status: 'success',
        message: 'Product Addedd successfully.',
        data: newproduct,
    })
})

productRoute.put("/:id", (req: express.Request, res: express.Response) => {
    const { id } = req.params
    let productIndex = data.findIndex((item, ind) => Number(id) == item.id)

    if (productIndex !== -1) {
        let product = data[productIndex]
        let updatedData = { ...product, ...req.body }
        data[productIndex] = updatedData
        res.status(200).send({
            status: 'success',
            message: 'Product updated successfully.',
            data: updatedData,
        })
    }
    else {
        res.status(200).send({
            status: 'failed',
            message: 'Product not found',
        })
    }
})


productRoute.delete("/:id", (req: express.Request, res: express.Response) => {
    const { id } = req.params
    let productIndex = data.findIndex((item, ind) => Number(id) == item.id)

    if (productIndex !== -1) {
        let deletedProduct = data.splice(productIndex, 1)
        res.status(200).send({
            status: 'success',
            message: 'Product deleted successfully.',
            data: deletedProduct,
        })
    }
    else {
        res.status(200).send({
            status: 'failed',
            message: 'Product not found',
        })
    }
})

export default productRoute