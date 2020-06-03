let buf1 = Buffer.from(("菜鸟教程"));
let buf2 = Buffer.from(("www.runoob.com"))
let buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());

// 缓冲区合并 完成

