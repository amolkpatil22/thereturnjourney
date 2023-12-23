import express from "express"

interface data {
    id: Number,
    productName: string,
    brand: string,
    category: string
}

let data: data[] = [
    { id: 54512231, productName: "iphone", brand: "apple", category: "electronics" },
    { id: 54512212, productName: "samsungTV", brand: "samsung", category: "electronics" }
]

/**
 * @swagger
 * definitions:
 *   Product:
 *     type: object
 *     required:      
 *       - productName
 *       - brand
 *       - category
 *     properties:
 *       productName:
 *         type: string
 *       brand:
 *         type: string
 *       category:
 *         type: string
 */


const productRoute = express.Router()


/**
 * @swagger
 * /products:
 *   get:
 *     description: Retrieve all products
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Product'
 *       404:
 *         description: Not found
 */

productRoute.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send({
        status: 'success',
        message: 'Retrieved all products successfully.',
        data: data,
    })
})

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     description: Retrieve a single product by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/Product'
 *       404:
 *         description: Not found
 */


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

/**
 * @swagger
 * /products:
 *   post:
 *     description: Add a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Product Added successfully
 *         schema:
 *           $ref: '#/definitions/Product'
 */


productRoute.post("/", (req: express.Request, res: express.Response) => {
    let newproduct = { ...req.body, id: Math.floor(Math.random() * 1000000000) }
    data.push(newproduct)

    res.status(200).send({
        status: 'success',
        message: 'Product Addedd successfully.',
        data: newproduct,
    })
})

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     description: Update a product by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         schema:
 *           $ref: '#/definitions/Product'
 *       404:
 *         description: Not found
 */


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

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     description: Delete a product by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         schema:
 *           $ref: '#/definitions/Product'
 *       404:
 *         description: Not found
 */

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