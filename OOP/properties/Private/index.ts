export {};
class Person {
    //Khi được đánh dấu là private, thành viên đó sẽ không thể truy cập được từ bên ngoài class chữa nó. Kể cả class con kế thừa
    private id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getID() {
        return this.id;
    }
}

const john = new Person(20, "quang");
console.log(john.getID());
// console.log(john.id);
