//函数参数解构
console.log([
    [1, 2],
    [3, 7]
].map(([a, b]) => a + b));

//map解构
let map = new Map();
// 生成具有iterator接口键值对
map.set('first', 'china');
map.set('second', 'world');
console.log(map);
// 获取key和value
for (let [key, value] of map) {
    console.log(key, value);
}
// 获取value
for (let [, value] of map) {
    console.log(value);
}