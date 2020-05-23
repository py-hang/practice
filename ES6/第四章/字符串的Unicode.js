//ES6提供字符串codePointAt()和StringfromCodePoint()方法
var s = '吉a'
    // 参数代表从那个字符开始,码点显示的10进制的
console.log(s.codePointAt(1));

//使用for-of（遍历器）遍历字符串
for (const a of 'hello') {
    console.log(a);
}