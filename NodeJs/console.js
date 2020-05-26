//标准输出流和重定向输出日志
console.log("this is a string ");
// node console.log 1>info.log反向输出日志
//使用console.info
console.info("this is a info");

//使用标准输出错误流
console.error("this is a error");
// 重定向错误流
//node console.log 2>error.log反向输出错误流
// 使用console.warn()
console.warn("this is a warn");

//查看对象内容并以标准输出流输出
var user = new Object();
user.name = "zhangsan";
user.age = 12;
console.dir(user);

// 使用time和timeennd计算执行时间
console.time('loop')
for (let i = 0; i < 10; i++) {;
}
console.timeEnd('loop');

//将栈信息以标准错误信息进行输出
console.trace("trace");

//对表达式结果进行评估，如果结果为false,输出一个字符串并输出一个异常信息
console.assert(1 == 22);

// 测试是否为主模块
var test = function test() {;
}
if (module === require.main) {
    console.log("this is a main module");
} else {
    console.log("this is not a main module");
}
exports.test = test;