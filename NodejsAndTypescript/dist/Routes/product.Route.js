"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let data = [
    { id: 54512231, productName: "iphone", brand: "apple", category: "electronics" },
    { id: 54512212, productName: "iphone", brand: "apple", category: "electronics" }
];
const productRoute = express_1.default.Router();
productRoute.get("/", (req, res) => {
    res.status(200).send({
        status: 'success',
        message: 'Retrieved all products successfully.',
        data: data,
    });
});
productRoute.get("/:id", (req, res) => {
    const { id } = req.params;
    let product = data.find((item) => Number(id) == item.id);
    if (product) {
        res.status(200).send({
            status: 'success',
            message: 'Retrieved product details.',
            data: product,
        });
    }
    else {
        res.status(200).send({
            status: 'failed',
            message: 'Product not found',
        });
    }
});
productRoute.post("/", (req, res) => {
    let newproduct = { ...req.body, id: Math.floor(Math.random() * 1000000000) };
    data.push(newproduct);
    res.status(200).send({
        status: 'success',
        message: 'Product Addedd successfully.',
        data: newproduct,
    });
});
productRoute.put("/:id", (req, res) => {
    const { id } = req.params;
    let productIndex = data.findIndex((item, ind) => Number(id) == item.id);
    if (productIndex !== -1) {
        let product = data[productIndex];
        let updatedData = { ...product, ...req.body };
        data[productIndex] = updatedData;
        res.status(200).send({
            status: 'success',
            message: 'Product updated successfully.',
            data: updatedData,
        });
    }
    else {
        res.status(200).send({
            status: 'failed',
            message: 'Product not found',
        });
    }
});
productRoute.delete("/:id", (req, res) => {
    const { id } = req.params;
    let productIndex = data.findIndex((item, ind) => Number(id) == item.id);
    if (productIndex !== -1) {
        let deletedProduct = data.splice(productIndex, 1);
        res.status(200).send({
            status: 'success',
            message: 'Product updated successfully.',
            data: deletedProduct,
        });
    }
    else {
        res.status(200).send({
            status: 'failed',
            message: 'Product not found',
        });
    }
});
exports.default = productRoute;
