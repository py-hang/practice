const fs = require("fs");
//查看文件信息
fs.stat("./message.txt", (err, stat) => {
    console.log(err, stat);
    console.log(stat.isDirectory());
    console.log(stat.isFile());
});
fs.exists("./message.txt", (exist) => {
    console.log(exist)
});


//获取文件的绝对路径
fs.realpath("message.txt", (err, path) => {
    console.log(err, path);
})