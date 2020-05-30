   //serverUrl
        let socketUrl = 'ws://127.0.0.1:3000';
        //保存websocket对象
        let socket;
        // reConnect函数节流标识符
        let flag = true;
        //心跳机制
        let heart = {
            timeOut:3000,
            timeObj:null,
            serverTimeObj: null,
            start:function(){
                console.log('start');
                let self = this;
                //清除延时器
                self.timeObj && clearTimeout(self.timeObj);
                self.serverTimeObj && clearTimeout(this.serverTimeObj);
                self.timeObj = setTimeout(function(){
                    socket.send('兄弟，你还好吗?');//发送消息，服务端返回信息，即表示连接良好，可以在socket的onmessage事件重置心跳机制函数
                    //定义一个延时器等待服务器响应，若超时，则关闭连接，重新请求server建立socket连接
                    self.serverTimeObj=setTimeout(function(){
                        socket.close();
                        reConnect(socketUrl);
                    },self.timeOut)
                },self.timeOut)
            }
        }
        //建立websocket连接函数
        function createWebsocket(url) {
            try {
                socket = new WebSocket(url);
                init();
            } catch (e) {
                //进行重连;
                console.log('websocket连接错误');
                reConnect(socketUrl);
            }
        }
        //对WebSocket各种事件进行监听   
        function init() {
            socket.onopen = function () {
                //连接已经打开
                //重置心跳机制
                heart.start();
            }
            socket.onmessage = function (event) {
                //通过event.data获取server发送的信息
                //对数据进行操作
                console.log(event.data);
                //收到消息表示连接正常，所以重置心跳机制
                heart.start();
            }
            socket.onerror = function () {
                //报错+重连
                console.log('socket连接出错');
                reConnect(socketUrl);
            }
            socket.onclose = function () {
                console.log('socket连接关闭');
            }
        }
 
        //重连函数
        //因为重连函数会被socket事件频繁触发，所以通过函数节流限制重连请求发送
        function reConnect(url) {
            if (!flag) {
                return;
            }
            flag = false;
            setTimeout(function () {
                createWebsocket(url);
                flag = true;
            }, 3000)
}