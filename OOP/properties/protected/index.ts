export {};
class Person {
    // thuộc tính mặc định là public
    protected id: number;
    name: string;

    // phương thức khởi tạo
    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }
}
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name); // cần phải để đúng thứ tự đã khởi tạo ở class cha
        this.position = position;
    }
    getID() {
        return this.id;
    }
}

const john = new Employee(123, "John", "Developer");
console.log(john.getID()); // 123
console.log(john.name); // 123

// console.log(john.id); Error: Property 'id' is protected and only accessible within class 'Person' and its subclasses.
