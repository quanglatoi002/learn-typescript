export {};
class Shape {
    area: number;
    constructor(area: number) {
        this.area = area;
    }
    getArea() {
        console.log("The area of the shape is " + this.area);
    }
}

class Circle extends Shape {
    constructor(radius: number) {
        super(Math.PI * radius * radius);
    }
}

class Rectangle extends Shape {
    constructor(length: number, breadth: number) {
        super(length * breadth);
    }
}

let shape: Shape;
shape = new Circle(5);
shape.getArea(); // Output: The area of the shape is 78.53981633974483

shape = new Rectangle(10, 20);
shape.getArea(); // Output: The area of the shape is 200
