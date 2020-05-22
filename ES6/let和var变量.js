// let和var的区别
// 1.变量提升现象
c = 1;
console.log(c);
var c;
// let不能进行变量提生，必须先声明后使用，let不允许重复声明或者形参和声明的变量一样
d = 1;
console.log(d);
let d;