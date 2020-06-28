buf = Buffer.alloc(256);
len = buf.write("www.runoob.com/杨林");
console.log("写入字节数：", len);
console.log(buf.toString("utf8", 15, 21));

const buf2 = Buffer.alloc(26);
for (let i = 0; i < 26; ++i) {
  buf2[i] = i + 65;
}

console.log(buf2.toString());

const buf3 = Buffer.alloc(26);
for (let i = 0; i < 26; ++i) {
  buf3[i] = i + 97;
}
console.log(buf3.toString("ascii", 0, 5)); // abcde
console.log(buf3.toString("utf8", 0, 5)); // abcde
console.log(buf3.toString("utf8")); // abcdefghijklmnopqrstuvwxyz
console.log(buf3.toString(undefined)); //abcdefghijklmnopqrstuvwxyz
