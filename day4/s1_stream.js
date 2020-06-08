/**
 * Stream 是一个抽象接口， Node中有很多对象实现这个接口。例如： 对HTTP服务器发起请求的request对象就是一个Stream， 还有stdout （标准输出）
 *
 *   。Readable - 可读操作
 *   。Writable - 可写操作
 *   。Duplex - 可读可写操作
 *   。Transfrom - 操作被写入数据，然后读出结果
 *
 *  所有的Stream 对象都是EventEmitter 的实例。常用的事件有：
 *  .data - 当有数据可读时触发
 *  。end - 没有更多的数据可读时触发。
 *  。error - 在接收和写入过程中发生错误时触发
 *  。finish - 所有数据已被写入到底层系统时触发
 *
 *
 */

const fs = require("fs");
let data = "";

// 创建可读流
const readerStream = fs.createReadStream("input.txt");

// 设置编码 utf8
readerStream.setEncoding("utf8");

// 处理流事件 --> data, end, error
readerStream.on("data", (val) => {
  data += val;
  console.log("监听事件data：", data);
});

readerStream.on("end", () => {
  console.log(data);
  readerStream.close();
});

readerStream.on("error", (err) => {
  console.log(err.stack);
});

console.log("程序执行完毕");
