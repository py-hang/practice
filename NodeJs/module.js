// 将模块以类的形式放在node_modules文件夹中可以直接加载出来，不用使用相对路径
console.log(module.id);
const foo = require('foo');
console.log(foo);
// 当前模块的id，主模块默认为'.',其他模块默认为绝对路径
console.log(module.id);
//模块文件名称
console.log(module.filename);
//模块是否加载完成
console.log(module.loaded);
// 当前模块的父模块
console.log(module.parent);
// 当前模块的子模块 ----返回数组
console.log(module.children);