//没有值的时候解构数组
// 1,对应位置赋值
let [, , third] = ["foo", "bar", "baz"];
console.log(third);
//扩展符解构
let [head, ...tail] = [1, 2, 3, 4];
console.log(tail); // ---- >[2,3,4]
let [head1, tail1] = [1, 2, 3, 4];
console.log(tail1); //------>
// 解构不成功会是undefined
var [foo] = []; //不会是 ----''
console.log(foo);
//等号右边的不是可遍历的结构就会报错
// let [foo] = 1; ----报错

// 解构可以指定默认值
let [foo1 = true] = [];
console.log(foo1);

//只有严格等于undefined,默认值才会生效
let [foo2 = 1] = [null];
console.log(foo2); //---->null