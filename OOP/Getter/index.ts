//Getter là 1 phương thức được định nghĩa trên 1 đối tượng, cho phép truy cập và trả về giá trị của 1 thuộc tính của đối tượng đó. Getter thường được sử dụng để lấy giá trị của thuộc tính 'private' hoặc 'protected' mà không muốn truy cập trực tiếp từ bên ngoài đối tượng
// get tên(không có tham số): type
//vd cụ thể

export {};
class Person {
    private _id: string;

    constructor(id: string) {
        this._id = id;
    }
    // sử dụng phương thức get
    get id(): string {
        return this._id;
    }
}

const person = new Person("quang");
console.log(person.id);
