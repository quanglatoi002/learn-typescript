export {};
//Optional Parameters
// Với JS, chúng ta có thể gọi 1 func mà không cần truyền vào input đầu vào, mặc dù func đấy cần tham số đầu vào.

//Với TS, nếu làm như vậy sẽ bị lỗi vì: TS dịch code và:
//Kiểm tra số lượng tham số truyền vào cho 1 func
//Kiểu dữ liệu truyền vào từng tham số
// Để sử dụng,chúng ta dùng dấu ? sau khi khai báo tên tham số
let sum = (a: number, b: number, c?: number): number => {
    if (c) return a + b + c;
    return a + b;
};

console.log(sum(5, 10));
