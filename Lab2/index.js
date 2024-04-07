const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));

const listProducts = [
  {
    id: "1",
    title: "NodeJS1",
    price: "1000",
    description: "NodeJS",
    imageUrl: "",
  },
  {
    id: "2",
    title: "NodeJS2",
    price: "3000",
    description: "NodeJS",
    imageUrl: "",
  },
  {
    id: "3",
    title: "NodeJS3",
    price: "4000",
    description: "NodeJS",
    imageUrl: "",
  },
  {
    id: "4",
    title: "NodeJS4",
    price: "5000",
    description: "NodeJS",
    imageUrl: "",
  },
  {
    id: "5",
    title: "NodeJS5",
    price: "6000",
    description: "NodeJS",
    imageUrl: "",
  },
];

app.get("/", (req, res) => {
  var today = new Date();
  currentDay = today.getDay();
  var day = "";
  switch (currentDay) {
    case 0:
      day = "Chủ nhật";
      break;
    case 1:
      day = "Thứ hai";
      break;
    case 2:
      day = "Thứ ba";
      break;
    case 3:
      day = "Thứ tư";
      break;
    case 4:
      day = "Thứ năm";
      break;
    case 5:
      day = "Thứ sáu";
      break;
    case 6:
      day = "Thứ bảy";
      break;
    default:
      console.log(`Error: ${currentDay}`);
  }
  // console.log(day);
  res.render("./pages/index", { kindOfDay: day });
});

app.get("/products", (req, res) => {
  res.render("./pages/products", { PRODUCTS: listProducts });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
