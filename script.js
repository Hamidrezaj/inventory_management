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

console.log(milk.toString());
console.log(eggs.toString());
