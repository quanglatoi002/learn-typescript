export {};
// sử dụng rest để copy kết quả truyền kên vd ở đây lấy 10,20 bỏ vào numbers cũng có thể hiểu rằng [10, 20].forEach()
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => (total += num));
    return total;
}
console.log(getTotal()); //0
console.log(getTotal(10, 20)); //30
console.log(getTotal(10, 20, 30)); //60
