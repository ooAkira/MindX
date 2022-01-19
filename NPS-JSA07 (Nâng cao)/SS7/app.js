// 1. Hằng số là các giá trị có thể xác định 1 lần duy nhất ( được gán giá trị 1 lần duy nhất)
const Pi = 3.14;
console.log("Pi: ", Pi);

// 2. Block & Scoped ( Các cú pháp khai báo: let, var)
let a = "Hello"
var b = "World"
console.log(a+ " " + b)

// Ví dụ:
{
    {
        let cha = "Đây là biến cha được khai báo ở khối 2";
        {
            console.log("cha: ", cha);
            var con = "Đây là biến con được khái báo ở khối 3";
        }
    }
    // console.log("cha: ", cha); // Sẽ bị lỗi: vì nằm ở ngoài block
}
console.log("con: ", con);
// Lưu ý: khi khai báo biến: nên khai báo bằng let.

// 3. Arrow Function
// Các khai báo hàm bình thường
let sum = function sum(a, b){
    return a + b;
}

console.log("sum(1,2): ", sum(1,2));

// Arrow Function thì như sau:

const sum2 = (a, b) =>{
    return a + b;
}

console.log("sum2(3,4): ", sum2(3,4));

// Cú pháp tổng quát

/*
const tenHam = (parmeters, ...) =>{
    Code JS
}
*/