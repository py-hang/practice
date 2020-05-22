var tmp = new Date();

// 内层变量可能会覆盖外层变量
function name() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
};
name();

//循环的变量泄露为全局变量
var s = 'hello';
for (var index = 0; index < s.length; index++) {
    console.log(s[index]);
}
// 泄露为全局变量
console.log(index);

//const命令一经声明必须初始化，并且值不能修改
// const a;      【报错---需要进行初始化】


//const赋值变量的情况
// 1.只是只想存储的地址，并不会限制对象的值，
const e = {};
e.prop = 123;
console.log(e.prop);
// 2.要限制对象的值可以这样做
const f = Object.freeze({});
f.prop = 123; //已冻结---undefined
console.log(f.prop);

//ES5只有两种声明的变量的方法var func，ES6有六种。。。let、const、import、class