//数组解构是按照顺序,对象解构是按照对象的属性名,必须相同才能取到值
var { foo, boo, bza } = { foo: '123', boo: '234' };
console.log(foo, boo, bza); //取不到的值输出为 --->undefined
//对象名不同但想取到值
var { foo: baz } = { foo: 'zzz' };
4
console.log(baz);
//默认解构跟数组一样,成员的值要严格等于undefined,才会采用默认值
let { foo1: baz1 } = { foo1: null };
console.log(baz1);
//以下做法：
// 这样报错会理解为代码块
// var x; { x } = { x: 1 };
var x;
({ x } = { x: 1 });
console.log(x);

//对象可以很方便的解构方法
var { random } = Math;
console.log(random());