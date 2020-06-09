/**
 * 管道流
 * 管道流提供了一个输出流到输入流的机制。通常我们用于一个流中获取数据并将数据传递到另一个流中。
 */

const fs = require("fs");

// 创建一个可读流
const readerStream = fs.createReadStream("input.txt");

// 创建一个可写流
const writerStream = fs.createWriteStream("output.txt");

// 管道读写操作
// 读取 input.txt 文件内容， 并将内容写到output.txt 文件中
readerStream.pipe(writerStream);
console.log("程序执行完毕");
