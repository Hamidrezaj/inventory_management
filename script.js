// Base class: ProductProperties

class ProductProperties {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalValue() {
    return this.price * this.quantity;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(
      2
    )}, Quantity: ${this.quantity}`;
  }

  static applyDiscount(products, discount) {
    products.forEach((product) => {
      product.price = product.price - product.price * discount;
    });
  }
}

// Subclass: PerishableProductProperties

class PerishableProductProperties extends ProductProperties {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

  toString() {
    return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
  }
}

// Sample instances
const milk = new PerishableProductProperties('Milk', 1.5, 10, '2024-12-31');
const eggs = new PerishableProductProperties('Eggs', 2.0, 12, '2024-11-15');

ProductProperties.applyDiscount([milk, eggs], 0.1);

console.log('After 10% discount:');
console.log(milk.toString());
console.log(eggs.toString());

// Store class

class Store {
  constructor() {
    this.inventory = [];
  }

  addProduct(product) {
    this.inventory.push(product);
  }

  getInventoryValue() {
    return this.inventory.reduce((total, product) => {
      return total + product.getTotalValue();
    }, 0);
  }

  findProductByName(name) {
    return this.inventory.find((product) => product.name === name) || null;
  }
}
