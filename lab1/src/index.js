require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const router = require("./routes/web");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

// Sử dụng body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// http logger
// app.use(morgan('combined'));

app.use("/lab1", router);

app.get("/", (req, res) => {
  res.render("home");
});

// template engine config
configViewEngine(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
