const [a, b, c, d, e] = 'hello';
console.log(a, b, c, d, e);
const { length: len } = 'hello';
console.log(len);

//数值和布尔值的解构
let { toString: s } = 3;
// 解构Number引用类型的toString方法
console.log(s === Number.prototype.toString);