var str = `\`yo\ world`;
console.log(str);
//模板字符串中插入函数
function fn() {
    return 'hello world'
}
console.log(`翻译${fn()}`)

//标签模板
let a = 1;
let b = 2;
var str = parse `hello${a}world${b}`;

function parse(s, ...args) {
    console.log(args);
}

var message = safeHTML `<p>${a} has sent you a message.</p>`
    // safeHtml函数
function safeHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        s += arg.replace(/&/g, '&amp;').replace(/</g, "&lt;").replace(/>/g, "&gt;");
        s += templateData[i];
    }
    return s;
}

console.log(message);