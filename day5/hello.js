function Hello() {
  let name;
  this.setName = function (str) {
    name = str;
  };
  this.sayHello = function(){
      console.log(`hello ${name}`)
  }
}

module.exports = Hello
