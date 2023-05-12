export {};
class Person {
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
