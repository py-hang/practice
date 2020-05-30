const fs = require("fs");
// 异步写入
var data = fs.writeFile("message.txt", "写入内容", "utf-8", (err, data) => {
        if (err)
            console.log("写入失败！")
        else
            console.log("写入成功！")
    })
    //追加内容
var data = fs.writeFile("message.txt", "写入内容", { flag: 'a', mode: 7 },
    (err, data) => {
        if (err)
            console.log("写入失败！")
        else
            console.log("写入成功！")
    })

//使用appendFile追加文件字符串或者文件在系统中的缓存到文件底部
var data = fs.appendFile("message.txt", require.cache["app.js"], (err) => {
    if (err)
        console.log("写入失败！")
    else
        console.log("写入成功！")
})

//打开文件并进行读写操作
fs.open("message.txt", 'r', (err, fd) => {
    console.log(err, fd);
});

//read方法
fs.open("message.txt", 'r', (err, fd) => {
    var buf = new Buffer(255);
    fs.read(fd, buf, 0, 4, 0, (err, byteRead, buffer) => {
        console.log(err, byteRead, buffer.slice(0, byteRead).toString());
    })
})