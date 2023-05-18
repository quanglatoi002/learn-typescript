//vd về class với TS
export {};
class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        //cái this.ssn còn tương đương vỡi Person.ssn còn tk ssn còn lại là của constructor
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person("a", "pham", "quang");
//Person là 1 lớp chứ không phải là 1 hàm và nó sẽ báo lỗi cho trường hợp đó và nếu ở các ngôn ngữ khác thì cũng không truy cập vào thuộc tính và phương thức của class
// let person = Person("a", "pham", "quang");

console.log(person.getFullName());
