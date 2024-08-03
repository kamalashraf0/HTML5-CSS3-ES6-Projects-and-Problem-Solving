import {Shape} from "./Shape.js"

export  class Rectangle extends Shape {
    constructor(length, width) {
      super();
      this.length = length;
      this.width = width;
    }
  
    area() {
        
      return this.length * this.width;
    }
  
    perimeter() {
      return 2 * (this.length + this.width);
    }
    
    toString() {
      return `Rectangle => Length: ${this.length}, Width: ${this.width}, Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
  }
  