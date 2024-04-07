const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/home/:id", (req, res) => {
  // res.send("Hello homepage!");
  res.json(req.query);
  // console.log(req.params.id);
});
app.get("/product", (req, res) => {
  res.send(`<form action="/product" method="post">
  <input type="text" placeholder="Mời bạn nhập">
  <input type="submit" value="Add">
</form>`);
});
app.post("/product/:id", (req, res) => {
  res.send("Hello homepage!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
