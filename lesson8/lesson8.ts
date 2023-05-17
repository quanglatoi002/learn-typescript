export {};
//string
let name: string = "quang";
let fullName: string = `pham van ${name}`;
console.log(fullName);

// Boolean
// tương tự như Js, kiểu dữ liệu boolean chỉ có 2 giá trị: true, false
let pending: boolean;
pending = true;
pending = false;
//Object Type
//Kiểu dữ liệu object tượng trưng cho tất cả các dữ liệu không là kiểu dữ liệu nguyên thủy bao gồm string, number, boolean, null, undefined, bigint, symbol,
//Kiểu dữ liệu tham chiếu : object, array, function

//Array Type
let skills: string[] = ["Problem Solving", "Software Design", "Programming"];
skills.push("98"); //error

//Tuple Types
// Hoạt động giống như Array, tuy nhiên có thêm 1 vài quy định bắt buộc:
//-Số phần tử của tuple cần được khai báo trước(cố định)
//Type của từng phần tử trong array cần được khai báo trước, và không nhất thiết phải giống nhau
//vd array
let array: ["Lang", 5];
// vd về tuple
// đòi hỏi phải truyền vào đúng thứ tự của tuple đã khai báo nếu [string, number] nhưng lúc truyền vào lại thành [20, 'quang'] là sai
let tuple: [string, number] = ["quang", 20];
// any type
// Đôi khi chúng ta dùng biến để lưu giá trị, nhưng lại không chắc chắn về kiểu dữ liệu của biến đấy(data types)
let anyType: any = "Quang";
anyType = true;
// void type không cần trả ra dữ liệu(thực chất vẫn trả ra), không cần keyword(áp dụng chỉ yếu cho function)
//Never: không bao giờ trả ra giá trị promise
