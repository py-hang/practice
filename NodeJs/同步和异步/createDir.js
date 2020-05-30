const fs = require("fs");
// 如果./则默认为创建与当前一样的目录
fs.mkdir("./test", (err) => {
    console.log(err)
});