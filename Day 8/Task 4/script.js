
function Rectangle(width, height) {
    this.width = width;
    this.height = height;

 
}

Rectangle.prototype.calculateArea = function() {
    return this.width * this.height;
};



Rectangle.prototype.calculatePerimeter = function() {
    return 2 * (this.width + this.height);
};


Rectangle.prototype.displayInfo = function() {
    let area = this.calculateArea();
    let perimeter = this.calculatePerimeter();
    console.log(`Rectangle:
        Width: ${this.width}
        Height: ${this.height}
        Area: ${area}
        Perimeter: ${perimeter}`);
};


let myRectangle = new Rectangle(8, 10);
myRectangle.displayInfo()



