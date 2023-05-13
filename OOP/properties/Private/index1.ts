export {};
class Person {
    private _numberId: string; // CMND đó
    private _fullName: string;

    constructor(numberId: string, fullName: string) {
        this._numberId = numberId;
        this._fullName = fullName;
    }
    getNumberId() {
        return this._numberId;
    }
    getFullName() {
        return this._fullName;
    }
}

// NumberId và FullName chỉ được khai báo lần đầu tiên khi khởi tạo, và sẽ không thể sửa đổi.
let lexuanquynh = new Person("123456789", "Le Xuan Quynh");

console.log(lexuanquynh.getNumberId());
console.log(lexuanquynh.getFullName());
