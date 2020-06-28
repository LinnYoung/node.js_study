const util = require("util");

function Base() {
  this.name = "base";
  this.base = 1991;
  this.sayHello = function () {
    console.log(`hello，${this.name}`);
  };
}

Base.prototype.showName = function () {
  console.log(this.name);
};

function Sub() {
  this.name = "sub";
}

util.inherits(Sub, Base);

const objBase = new Base();
objBase.showName();
objBase.sayHello();
const objSub = new Sub();
objSub.showName();
// objSub.sayHello()
console.log(objSub);
