export {};
class Person {
    // thuộc tính mặc định là public
    name: string;
    age: number;
    // phương thức khởi tạo
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayNo() {
        console.log(`No Hello ${this.name} and ${this.age}`);
    }
}

const john = new Person("Quang", 23);
john.sayNo();
