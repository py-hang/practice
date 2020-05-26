//在nodejs的REPL环境中运行调试 ---- node debug xxx.js
console.log("hello world");

function foo() {
    console.log('hello foo');
    return 1000;
}
var bar = 'this is a pen';
var http = require('http');
var i = foo();
console.log(i);