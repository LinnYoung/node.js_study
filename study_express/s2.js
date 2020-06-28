const express = require("express");
const app = express();

// 一个简单的 logger
app.use(function (req, res, next) {
  console.log(`${req.method},${req.url}`);
  next();
});

// 响应
app.use("/linn", function (req, res, next) {
  res.send("Hello World");
});

app.use(express.static(__dirname + "/public"));

app.use("/static", express.static(__dirname + "/public"));

app.listen(3000);
