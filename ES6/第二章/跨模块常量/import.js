// 有两种引入的方式
// 1.使用*将所有的常量封成一个变量然后作为属性调用
import * as constant from './export';
console.log(constant.A);
console.log(constant.B);
//2.使用{}按需引入
import { A, B, C } from './export';
console.log(A);
console.log(B);
console.log(C);