// 通过resolve方法输出模块的绝对路径
console.log(require.resolve('./context.js'));

//使用require.cache查看所有模块的缓存去内容，查看某个特定的模块使用require.cache['模块名']
console.log(require.cache[require.resolve('./app.js')]);
//删除模块缓存区中的内容
delete require.cache[require.resolve('./app')];
// 重新查看 ---- undefined
console.log(require.cache[require.resolve('./app.js')]);