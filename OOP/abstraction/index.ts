// Animal là một lớp trừu tượng vì nó có 1 method makeSound() không được định nghĩa, và không thể được khởi tạo trực tiếp. Lớp "cat" kế thừa từ lớp Animal và được định nghĩa lại phương thức makeSound
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("Moving...");
    }
}
class Cat extends Animal {
    makeSound(): void {
        console.log("Meowwwww");
    }
}

let cat = new Cat();
cat.makeSound();
cat.move();
