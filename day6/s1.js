/**
 * 一个函数可以作为另一个函数的参数。我们先定义一个函数然后传递，也可以在传递参数的地方直接定义函数
 */

 function say(word){
     console.log(word)
 }

 /**
  *
  * @param {函数} someFunction
  * @param {参数} value
  */
 function execute(someFunction, value){
     someFunction(value)
 }

 execute(say,'hello')
