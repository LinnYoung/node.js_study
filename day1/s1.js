// 阻塞代码实现
let fs = require("fs");

const data = fs.readFileSync("./test.txt");
console.log(data.toString());
console.log("程序执行完毕");

//  接下来学习node.js 事件循环
