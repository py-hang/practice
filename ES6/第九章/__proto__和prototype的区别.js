function Flower() {

}

Flower.prototype.name = "123";
Flower.prototype.age = "123";

var Flower1 = new Flower();
console.log(Flower1.prototype);

console.log(Flower1.__proto__);