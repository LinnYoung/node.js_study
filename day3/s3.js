/**
 * 缓冲区裁剪
 * buf.slice([start[,end]])
 * 参数描述如下：
 *      start - number,可选，默认 0
 *      end - number, 可选， 默认 buffer.length
 */

let buffer1 = Buffer.from("runoob");
// 剪切缓冲区
let buffer2 = buffer1.slice(3, 5);
console.log(`buffer2 content: ${buffer2.toString()}`);
