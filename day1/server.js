let http = require("http");

const server = http.createServer((request, response) => {
  // 发送 Http 头部
  //Http 状态值： 200： OK
  // 内容类型： text/plain
  response.writeHead(200, { "Content-Type": "text/plain" });

  // 发送响应数据“hello world”
  response.end("Hello World\n");
});

server.listen(8888);
// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8888");
