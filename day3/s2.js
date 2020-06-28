/**
 * 拷贝缓冲区
 */

// let buf1 = Buffer.from("abcdefghijkl");
// let buf2 = Buffer.from("mnopqrstuvwxyz");
// // buf2 插入到 buf1 指定位置上
// buf2.copy(buf1, buf1.length);

// console.log(buf1.toString());

let buf1 = Buffer.alloc(26)
buf1.write('ABCDEFGHIJKLMN')
let buf2 = Buffer.from('OPQRSTUVWXYZ')
buf2.copy(buf1, 14)
console.log(buf1.toString(), buf1.length)
