let buffer1 = Buffer.alloc(255);
buffer1.fill("aa"); // 来填充 buffer没有指定的值
buffer1.write("llllllll");
console.log(buffer1.toString());
console.log(buffer1.length);
console.log(buffer1);
