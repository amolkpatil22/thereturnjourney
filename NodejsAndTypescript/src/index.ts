import express from "express"
import cors from "cors"
import productRoute from "./Routes/product.Route"
import logger from "./Middleware/logger"
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express()


// Options for the swagger docs
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Product API',
            version: '1.0.0',
            description: 'API for managing products',
        },
        servers: [{ url: "http://localhost:8080" }]
    },
    apis: ['./src/Routes/*.ts'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

// Use swagger-ui-express to serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors())
app.use(express.json())
app.use(logger)

app.use("/products", productRoute)

app.listen(8080, () => {
    console.log("connected to server")
})