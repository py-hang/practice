'use strict'
var http = require("http");
var url = require("url");
var querystring = require("querystring");
var server = http.createServer();
server.on('request', function(req, res) {
    var urlPath = url.parse(req.url).pathname;
    var qs = querystring.parse(req.url.split('?')[1]);
    if (urlPath.indexOf('/jsonp') !== -1) {
        res.writeHead(200, { 'Content-type': 'text/plain/;charset=utf-8' });
        var data = {
            "name": "Monkey"
        }
        data = JSON.stringify(data);
        var callback = qs.callback + '(' + data + ')';
        res.end(callback)
    } else {
        res.writeHead(200, { 'Content-type': 'text/plain/;charset=utf-8' });
        res.end("替代数据");
    }
});

server.listen('8080');
console.log('server running');