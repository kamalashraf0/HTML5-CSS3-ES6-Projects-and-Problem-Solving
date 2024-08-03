import { Square } from "./Square.js";

export class Circle extends Square {
    constructor(radius) {
        super();
        this.radius = radius;
    }
  
    area() {
      return Math.PI * (this.radius * this.radius);
    }
  
    perimeter() {
      return 2 * Math.PI * this.radius;
    }
  
    toString() {
      return `Circle => Radius: ${this.radius}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
  }