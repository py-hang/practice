# JSONP

###### jsonp本质上就是通过script标签的src携带回调参数进行跨域请求的操作

```html
<script>
        function test(data) {
            document.querySelector("#test").innerHTML = data.name;
        };
</script>
<script src="http://127.0.0.1:8080/jsonp?callback=test"></script>
```

###### 其中的test就为回调函数，服务器通过是别jsonp响应回调函数调用的数据

```js
server.on('request', function(req, res) {
    var urlPath = url.parse(req.url).pathname;
    var qs = querystring.parse(req.url.split('?')[1]);
    //识别路径后的jsonp的参数
    if (urlPath.indexOf('/jsonp') !== -1) {
        res.writeHead(200, { 'Content-type': 'text/plain/;charset=utf-8' });
        var data = {
            "name": "Monkey"
        }
        data = JSON.stringify(data);
        //返回回调的数据
        var callback = qs.callback + '(' + data + ')';
        res.end(callback)
    } else {
        res.writeHead(200, { 'Content-type': 'text/plain/;charset=utf-8' });
        res.end("替代数据");
    }
});
```

###### 注意：script标签要写在body中，函数要是全局函数，JSONP的缺点是只能实现get一种请求

## 其他收获

##### 1.同源策略

* ###### 协议相同

* ###### 域名相同

* ###### 端口相同

##### 2.127.0.0.1和localhost有什么区别

```md
localhost：也叫local ，正确的解释是：本地服务器

127.0.0.1：在windows等系统的正确解释是：本机地址(本机服务器)

localhost：是不经网卡传输的，它不受网络防火墙和网卡相关的的限制。

127.0.0.1：是通过网卡传输的，它依赖网卡，并受到网络防火墙和网卡相关的限制。

  所以我们现在也应该明白了一个道理，那就是一般设置程序时本地服务用localhost是最好的，localhost不会解析成IP，也不会占用网卡、网络资源
```

###### 参考

> https://www.cnblogs.com/giggle/p/5496596.html  
>
> https://www.cnblogs.com/giggle/p/5357269.html