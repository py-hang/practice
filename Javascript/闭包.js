var i = "global"

function name() {
    var i = "local"

    function f() {
        return i;
    }
    return f();
};
console.log(name());