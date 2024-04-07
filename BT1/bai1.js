const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Sử dụng middleware để parse các request gửi lên từ form
app.use(express.urlencoded({ extended: true }));

// Trang chủ hiển thị form đăng nhập
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bai1.html");
});

// Xử lý request từ form đăng nhập
app.post("/bai1", (req, res) => {
  const { uname, psw } = req.body;

  // Đọc dữ liệu từ tệp user.txt
  fs.readFile("user.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.send("Lỗi đọc dữ liệu người dùng");
      return;
    }

    // Tách dữ liệu thành các cặp tên người dùng và mật khẩu
    const users = data.split("\n").map((line) => line.split(":"));

    // Kiểm tra xem có tồn tại tài khoản với tên người dùng và mật khẩu đã nhập không
    const user = users.find(
      ([username, password]) => username === uname && password === psw
    );

    if (user) {
      res.send(`Đăng nhập thành công với tài khoản ${uname}`);
    } else {
      res.send(
        "Đăng nhập không thành công. Vui lòng kiểm tra lại tên người dùng và mật khẩu."
      );
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
