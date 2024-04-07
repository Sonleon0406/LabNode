const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

const inventors = [
  { id: 1, first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { id: 2, first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { id: 3, first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { id: 4, first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { id: 5, first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { id: 6, first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
];

app.get("/add-inventor", (req, res) => {
  res.send(`<div style=" max-width: 600px;margin: 0 auto;padding: 20px;">
  <h2 style="font-size: 24px;margin-bottom: 20px;">Thêm nhà khoa học vào danh sách</h2>
  <form style="margin-bottom: 20px;" action="/add-inventors" method="post">
      <label>First Name:</label>
      <input name="first" style=" display: block;width: 100%;padding: 10px;margin-bottom: 10px;border: 1px solid #ccc;border-radius: 5px;box-sizing: border-box;" type="text"   placeholder="First Name" required>

      <label>Last Name:</label>
      <input name="last" style=" display: block;width: 100%;padding: 10px;margin-bottom: 10px;border: 1px solid #ccc;border-radius: 5px;box-sizing: border-box;" type="text"  placeholder="Last Name" required>

      <label >Year:</label>
      <input name="year" style=" display: block;width: 100%;padding: 10px;margin-bottom: 10px;border: 1px solid #ccc;border-radius: 5px;box-sizing: border-box;" type="number" placeholder="Year" required>

      <label>Passed:</label>
      <input name="passed" style=" display: block;width: 100%;padding: 10px;margin-bottom: 10px;border: 1px solid #ccc;border-radius: 5px;box-sizing: border-box;" type="number"  placeholder="Passed" required>

      <input style=" display: block;width: 100%;padding: 10px;margin-bottom: 10px;border: 1px solid #ccc;border-radius: 5px;box-sizing: border-box; background-color:blue;color: white" class="them" type="submit" value="Add">
  </form>
</div>
  `);
});

app.post("/add-inventors", (req, res) => {
  let inventor = new Object();
  inventor.id = inventors.length + 1;
  inventor.first = req.body.first;
  inventor.last = req.body.last;
  inventor.year = req.body.year;
  inventor.passed = req.body.passed;
  inventors.push(inventor);
  res.redirect("/inventors");
});

app.get("/inventors", (req, res) => {
  let list = `<h1>Danh sach cac nha khoa hoc</h1>`;
  inventors.forEach((e) => {
    list += `<li><a style="text-decoration: none; color: red;" href="/inventor/${e.id}">${e.last} ${e.first}</a></li>`;
  });
  res.send(list);
});

app.get("/inventor/:id", (req, res) => {
  let id = req.params.id;
  let inventor = inventors.find((e) => e.id === parseInt(id));
  if (inventor) {
    let thongtin = `<h2>Thong tin chi tiet cac nha khoa hoc: Full Name: ${inventor.first} ${inventor.last}, Year: ${inventor.year}, Passed: ${inventor.passed}</h2>`;
    // res.send(thongtin);
    res.json(thongtin);
  } else {
    res.status(404).send("Inventor not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
