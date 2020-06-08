const fs = require("fs");
const data = "啦啦啦啦啦啦啦啦啦啦啦啦啦啦33333";

// 创建一个可以写入的流， 写入到文件output.txt 中(若无output.txt文件，则自动创建)
const writeStream = fs.createWriteStream("output.txt");

// 使用utf8 编码写入数据
writeStream.write(data, "utf8");

// 标记文件末尾
writeStream.end();

// 处理流事件 --> data, end, error
writeStream.on("finish", () => {
  console.log("写入完成");
  writeStream.close();
});

writeStream.on("error", (err) => {
  console.log(err.stack);
});
