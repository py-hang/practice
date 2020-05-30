// 要手动触发调用
function name() {
    console.log(1234);
}

// 函数声明后被立即调用
(function() {
    console.log(456);
}())