const fs = require("fs");
// 同步操作
var data = fs.readFileSync("index.html", 'utf-8');
console.log(data);
// 异步操作 ----读取完成后执行的回调函数包含返回值
var data = fs.readFile("index.html", 'utf-8', (err, data) => {
    console.log(data);
});
console.log(data);

// 异步读取文件
var data = fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log("读取文件失败")
    } else {
        console.log("读取文件成功", data);
    }
});

// 同步读取文件

try {
    var data = fs.readFileSync("test.txt", { encoding: "utf-8" });
    console.log(data);
} catch (e) {
    console.log(e);
}