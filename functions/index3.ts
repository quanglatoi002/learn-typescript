export {};
//Default Parameters
//Nếu như optional parameter cho phép chúng "truyền" hoặc 'không truyền' input đầu vào cho func, và trong trường hợp "không truyền", giá trị cho chúng ta nhận được là undefined

// nhưng chúng ta không muốn để giá trị mặc định và undefined thì có thể thay đổi giá trị mặc đinh đó
let sum = (a: number, b: number, c = 0.5): number => {
    if (c) return a + b + c;
    return a + b;
};

console.log(sum(5, 10, 20));
