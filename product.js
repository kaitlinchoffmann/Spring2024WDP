class Product {
  constructor(id, name, price) {
    this.productId = id
    this.productName = name
    this.productPrice = price
  }
  
  getProductPrice() {
    return this.productPrice
  }
  
  getProductName() {
    return this.productName
  }
  
  setProductPrice(price) {
    this.productPrice = price
  }
  
  setProductName(name) {
    this.productName = name
  }
}

const p1 = new Product(123, "pasta", 5.99)
p1.setProductPrice(3.99)
console.log(p1.getProductPrice())

p1.amount = 5

console.log(p1)