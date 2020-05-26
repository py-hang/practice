const http = require('http');
// 测试require.main方法
const test = require('./console');
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<head><meta charset='utf-8'/></head>");
    res.end("你好\n");
}).listen(8081, "127.0.0.1");
console.log("app running");
test.test();
if (module === require.main) {
    console.log("this is a main module");
} else {
    console.log("this is not a main module");
}