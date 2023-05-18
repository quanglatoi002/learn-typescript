/// ========== Static ===========
// 1.Thuộc tính static: Bạn có thể khai báo các thuộc tính static trong 1 lớp. Các thuộc tính static chia sẻ cùng 1 giá trị cho tất cả các phiên bản của lớp đó. Chúng được truy cập thông qua tên lớp, không cần tạo 1 phiên bản(từ khóa 'new') của lớp đó.

class MathUtils {
    static PI: number = 3.14;

    static calculateArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathUtils.PI); // Output: 3.14
console.log(MathUtils.calculateArea(5)); // Output: 78.5

//2. Phương thức static: Cũng giống như thuộc tính, bạn có thể khai báo các phương thức static trong 1 lớp.Các phương thức static có thể truy cập trực tiếp thông qua tên lớp, không cần tạo 1 phiên bản có lớp đó.

class MathUtils2 {
    static add(a: number, b: number): number {
        return a + b;
    }
}

console.log(MathUtils2.add(2, 3)); // Output: 5

//3. Không thể truy cập thuộc tính non-static từ bên trong phương thức static: Trong 1 phương thức static, bạn không thể truy cập trực tiếp các thuộc tính non-static của lớp. Điều này bởi vì các phương thức static không có phiên bản cụ thể để truy cập các thuộc tính không-static.

class MathUtils3 {
    // static PI: number; // phải khai báo thuộc tính static cho PI thì mới có thể truy cập vào bên trong phương thức được khai báo là static
    static multiplyByPI(value: number): number {
        return value;
        // return value * MathUtils3.PI;
    }
}
const mathUtilsInstance = new MathUtils3();
// console.log(mathUtilsInstance.PI); // OK
console.log(MathUtils3.multiplyByPI(5)); // OK

//4. Kế thừa các thành phần static: Các thành phần static không được kế thừa từ lớp cha sang lớp con. Có thể hiểu là lớp con không thể truy cập trực tiếp các thuộc tính static hoặc phương thức static của lớp cha thông qua từ khóa "super"

// ==> Tóm gọn là nếu ta khai báo với từ khóa "static" thì không thể kế thừa các thuộc tính và phương thức đó nếu như được kế thừa.
class Parent {
    static staticProperty: number = 10;

    static staticMethod(): void {
        console.log("Static method in Parent");
    }
}

class Child extends Parent {
    static childStaticProperty: number = 20;

    static childStaticMethod(): void {
        console.log("Static method in Child");
    }

    static accessStaticProperties(): void {
        console.log(this.staticProperty); // Error: Property 'staticProperty' does not exist on type 'typeof Child'
        console.log(this.childStaticProperty); // OK
    }

    static accessStaticMethods(): void {
        this.staticMethod(); // Error: Property 'staticMethod' does not exist on type 'typeof Child'
        this.childStaticMethod(); // OK
    }
}
