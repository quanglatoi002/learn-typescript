export {};
//setter được sử dụng để thiết lập giá trị cho thuộc tính trong đối tượng.
// bổ sung cho getter, ta không cần phải gọi hàm để lấy giá trị của thuộc tính, mà có thể truy cập nó như 1 thuoos thuộc tính bình thường.
//Còn với setter, ta có thể kiểm tra và xử lý giá trị được gán cho thuộc tính trước khi gán giá trị đó cho thuộc tính.

class Person {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    get age(): number {
        return this._age;
    }
    //newAge:number là giá trị muốn thay đổi
    set age(newAge: number) {
        this._age = newAge;
    }
}
//getter
const person = new Person(25);
console.log(person.age); // Output: 25

//setter
person.age = 30;
console.log(person.age); // Output: 30
