# Product API

## Overview

The Product API is a RESTful service designed to manage product information, providing functionalities for retrieving, adding, updating, and deleting product data, documented using Swagger.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Endpoints](#available-endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Cypress Testing](#cypress-testing)
- [Swagger ScreenShots](#swagger-screenshots)

## Installation 

1. **Clone the repository:**

    ```bash
    git clone https://github.com/amolkpatil22/thereturnjourney.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd thereturnjourney/NodejsAndTypescript
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```
4. **Run the server locally:**

    ```bash
    npm run build
    npm run server
    ```
    
## Usage

The API endpoints are designed to perform CRUD operations on product data. Detailed instructions and examples for each endpoint are provided below.

## Available Endpoints

- **GET <a href="http://localhost:8080/products">http://localhost:8080/products</a>**: Retrieve all products.
- **GET http://localhost:8080/products/:id**: Retrieve a product by ID.
- **POST http://localhost:8080/products**: Add a new product.
- **PUT http://localhost:8080/products/:id**: Update a product by ID.
- **DELETE http://localhost:8080/products/:id**: Delete a product by ID.

## Swagger Documentation
#### Overview
Swagger is integrated into this API to provide comprehensive documentation of available endpoints, request/response models, and other essential information. The Swagger UI allows users to interact with the API directly from a user-friendly interface, making it easier to understand the API's capabilities and requirements.

#### Accessing Swagger UI
Once the server is running locally, you can access the Swagger UI by navigating to: http://localhost:8080/api-docs

#### How to Use
- Navigate to the provided Swagger UI URL in the browser.
- Browse through the available endpoints to understand their functionalities.
- Use the provided examples to make requests and see responses in real-time.

## Cypress Testing
1. **How to run:**

    ```bash
    npm run cypress
    ```

## Swagger ScreenShots
![ScreenShot 1](screenshots/SwaggerSS1.png)
![ScreenShot 2](screenshots/SwaggerSS2.png)
![ScreenShot 3](screenshots/SwaggerSS3.png)
![ScreenShot 4](screenshots/SwaggerSS4.png)

<h3 align="center"> 
    ***************** Thank You *****************
</h3>
