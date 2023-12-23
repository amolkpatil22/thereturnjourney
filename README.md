# Product API

## Overview

The Product API is a RESTful service designed to manage product information. It provides functionalities for retrieving, adding, updating, and deleting product data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Endpoints](#available-endpoints)
- [Examples](#examples)
- [Running Locally](#running-locally)

## Installation and Setup

1. **Clone the repository:**

    ```bash
    git clone [repository-url]
    ```

2. **Navigate to the project directory:**

    ```bash
    cd [project-directory]
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

The API endpoints are designed to perform CRUD operations on product data. Detailed instructions and examples for each endpoint are provided below.

## Available Endpoints

- **GET /products**: Retrieve all products.
- **GET /products/{id}**: Retrieve a product by ID.
- **POST /products**: Add a new product.
- **PUT /products/{id}**: Update a product by ID.
- **DELETE /products/{id}**: Delete a product by ID.

## Examples

### Retrieve All Products

To retrieve all products, make a GET request:

```bash
curl http://localhost:8080/products
