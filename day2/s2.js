const events = require("events");
const emmiter = new events.EventEmitter();

// 监听器#1
const listener1 = function listener1() {
  console.log("监听器 listener1 执行");
};

// 监听器#2
const listener2 = function listener2() {
  console.log("监听器 listener2 执行");
};

// 监听器#3
const listener3 = function listener3() {
  console.log("监听器 listener3 执行");
};

// 绑定 connection 事件，处理函数为listener1
emmiter.addListener("connection", listener1);

// 绑定 connection 事件，处理函数为listener2
emmiter.addListener("connection", listener2);

let eventListeners = emmiter.listenerCount("connection");
console.log(`${eventListeners} 个connection事件`);

// 处理 connection事件
emmiter.emit("connection");

// 移除事件listener1 函数
emmiter.removeListener("connection", listener1);
console.log(" listener1 移除成功");

// connection事件 添加一次 listener3监听
emmiter.once("connection", listener3);

// 触发事件connection
emmiter.emit("connection");

eventListeners = emmiter.listenerCount("connection");
console.log("事件监听数量： ", eventListeners);

console.log("程序执行完毕");

