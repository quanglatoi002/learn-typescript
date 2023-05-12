class Person {
    readonly name: string;
    age: number;
    // hàm khởi tạo
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++; // thuộc tính age không phải là readonly, nên có thể thay đổi giá trị
    }
}

const john = new Person("John", 30);
console.log(john.name); // John

//   john.name = "Johnny"; // Error: Cannot assign to 'name' because it is a read-only property.

john.celebrateBirthday();
console.log(john.age); // 31
