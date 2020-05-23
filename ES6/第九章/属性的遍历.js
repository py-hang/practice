//ES6中一共有6中对象属性遍历的方法
let symbol = Symbol('123');
let obj = {
        name: '123',
        age: 123,
        class: '123213',
        money: 1231231,
        symbol: symbol
    }
    // 获取某个字段的描述信息
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// 返回一个数组 所有不是symbol的属性
console.log(Object.getOwnPropertyNames(obj));
// 返回一个数组 所有类型为symbol的属性
console.log(Object.getOwnPropertySymbols(obj));
// 返回一个数组 所有属性名
console.log(Reflect.ownKeys(obj)); //顺序是数值--字符串--symbol
// 返回所有类型不是symbol的属性
console.log(...Reflect.enumerate(obj));