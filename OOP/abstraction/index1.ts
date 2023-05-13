export {};
// Trong trường hợp này constructor của class cha đã không có tham số, thì bạn có thể bỏ qua việc gọi super()
interface Person {
    name: string;
    age: number;
    //interface chỉ có thể khai báo, ko định nghĩa code trong method
    sayHello(): void;

    // Nếu ko định nghĩa constructor thì Js enginne sẽ tự động gọi constructor mặc định của class cha
}

class Student implements Person {
    name: string;
    age: number;
    studentId: number;

    constructor(name: string, age: number, studentId: number) {
        // Nếu như có định nghĩa constructor ở class cha mà bên kế thừa nó lại không sử dụng super() thì nó sẽ báo lỗi ngay lập tức.
        this.name = name;
        this.age = age;
        this.studentId = studentId;
    }

    sayHello(): void {
        console.log(
            `Hello, my name is ${this.name}, and I am ${this.age} years old.`
        );
    }
}

let student = new Student("John", 20, 12345);
student.sayHello(); // Hello, my name is John, and I am
