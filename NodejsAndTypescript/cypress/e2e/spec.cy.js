
describe('API endpoints testing', () => {


  it("Should fetch all the products", () => {         // GET /api/products: Retrieve a list of products.
    cy.request("http://localhost:8080/products")
      .then((res) => {
        cy.expect(res.status).eq(200)
        cy.expect(res.body.data).to.be.an("array")
      })
  })


  it("Should post the new product", () => {          // POST /api/products: Create a new product.
    const newproduct = {
      productName: "Lava",
      brand: "Lava",
      category: "electronics"
    }
    cy.request("POST", "http://localhost:8080/products", newproduct)
      .then((res) => {
        cy.expect(res.status).eq(200)
        cy.expect(res.body.data).to.have.property("productName", "Lava")
      })
    cy.request("http://localhost:8080/products")
      .then((res) => {
        cy.expect(res.status).eq(200)
        cy.expect(res.body.data).to.be.an("array")
        cy.wrap(res.body.data).each((item) => {
          if (item.productName == "Lava") {
            expect(item).to.have.property("productName", "Lava")
          }
        })
      })
  })


  it("Should update the product", () => {                          // PUT /api/products/id: Update details of a specific product by ID.
    cy.request("http://localhost:8080/products")
      .then((res) => {
        let product = res.body.data.find((item) => item.productName == "Lava")

        cy.request("PUT", `http://localhost:8080/products/${product.id}`, { productName: "Agni" })
          .then((res) => {
            expect(res.status).eq(200)
          })

        cy.request("http://localhost:8080/products")
          .then((res) => {
            cy.expect(res.status).eq(200)
            cy.expect(res.body.data).to.be.an("array")
            cy.wrap(res.body.data).each((item) => {
              if (item.id == product.id) {
                expect(item).to.have.property("productName", "Agni")
              }
            })
          })
      })
  })


  it("Should return error for wrong product id", () => {              // Error handling for GET request with wrong product id
    cy.request("http://localhost:8080/products/4562")
      .then((res) => {
        expect(res.body.status).to.contain("failed")
      })
  })
})