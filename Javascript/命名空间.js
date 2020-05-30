//设定场景为 --------声明一个extend函数用来检查IE bug，如果有则返回一个带补丁的extend版本
var extend = (function() {
    for (var p in { toString: null }) {
        return function extend(o) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var prop in source) {
                    o[prop] = source[prop];
                }
                return o;
            };
        }
    }
    return function pached_extend() {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (varprop in source) {
                o[prop] = source[prop];
            }
            for (var j = 0; j < protoprops.length; j++) {
                prop = protoprops[j];
                if (source.hasOwnProperty(prop)) {
                    o[prop] = source[prop];
                }
            }
            return o;
        }
    };
    var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty", "isPrototypeOf", "toLocaleString"];
}());
console.log(extend.toString());