//所有可能出发事件的对象都是Eventemitter类的子类的实例
//on方法和addListener事件的处理机制是一样的
const http = require('http');
let service = http.createServer();
const events = require('events');
// on----对指定事件绑定事件处理函数
service.on('request', (req, res) => {
    console.log(req.url);
    res.end();
});

// 对于同一事件添加多个事件处理函数
service.on('request', (req, res) => {
    console.log("你好")
    res.end();
})
service.listen(8080, "127.0.0.1");

// once和on是一样的，但是once执行一次就会解除绑定
service.once('request', (req, res) => {
    console.log("once");
})

// 使用listener监听事件的事件处理函数，返回一个包含绑定事件的所有处理函数的数组
console.log(service.listeners('request'));

// 使用removeListener解除事件处理函数的绑定

// 使用removeAllListener解除事件的所有处理函数
service.removeAllListeners(['request']);

// 自定义事件并将其触发
service.on('customEvent', function(arg1, arg2, arg3) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
});
service.emit('customEvent', 1, 2, 3);
// 使用event模块下EvemtEmitter类
console.log(events.EventEmitter.listenerCount(service, 'request'));
console.log(events.EventEmitter.listenerCount(service, 'customEvent'));

//EventEmitter类中定义了两个监听事件绑定的事件处理函数
// 添加事件处理函数的时候触发
service.on('newListener', (e, f) => {
    console.log(e, f);
});
// 取消事件处理函数的时候触发
service.on('removeListener', (e, f) => {
    console.log(e, f);
})