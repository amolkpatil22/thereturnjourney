import express from "express"
import cors from "cors"
import productRoute from "./Routes/product.Route"
import logger from "./Middleware/logger"

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.use("/products", productRoute)

app.listen(8080, () => {
    console.log("connected to server")
})