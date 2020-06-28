const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello Linn! Welcome to express");
});

app.listen(3000);

app.set("title", "LinnYoung");
app.get("title");
app.enable('trust proxy')
app.get('trust proxy')
