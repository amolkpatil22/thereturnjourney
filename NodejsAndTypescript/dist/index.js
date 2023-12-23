"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_Route_1 = __importDefault(require("./Routes/product.Route"));
const logger_1 = __importDefault(require("./Middleware/logger"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
// Use swagger-ui-express to serve Swagger UI
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(logger_1.default);
app.use("/products", product_Route_1.default);
app.listen(8080, () => {
    console.log("connected to server");
});
