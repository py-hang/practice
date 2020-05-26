//开启一个REPL环境，并显示上下文对象的属性值
var repl = require('repl');
// 开启一个REPL环境
// 声明一个REPL上下文对象
var con = repl.start().context;
con.msg = "显示信息";
con.testFunction = function() { console.log(con.msg) };