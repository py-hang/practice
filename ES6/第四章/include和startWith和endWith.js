// es6/中四种方法确定一个字符串是否包含另一个字符串 --->indexOf、includes、startWith、endWith
//includes--->是否包含
let str1 = 'hello'
console.log(str1.includes('ll'));
//startWith--->是否在源字符串的头部
console.log(str1.startsWith('ll'), str1.startsWith('he'));
// endWith ---->是否在源字符串的尾部
console.log(str1.endsWith('lo'), str1.endsWith('he'));
//重复字符串，相当于clone
console.log(str1.repeat(2)); //取小数会取整（去掉小数），负数会报错,字符串会先转为数字
// 没有参数则为空字符串
console.log(str1.repeat() === "");