const fs = require("fs");

console.log("准备写入文件");
fs.writeFile("s4.txt", "s4写入的txt文件", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("数据写入成功！");
  console.log("------我是分割线------");
});
