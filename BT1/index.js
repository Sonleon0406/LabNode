const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function saveUser(username, password) {
  const userData = `${username}:${password}\n`;

  fs.appendFile("user.txt", userData, (err) => {
    if (err) throw err;
    console.log("Tài khoản đã được lưu vào user.txt");
    rl.close();
  });
}

rl.question("Nhập tên người dùng: ", (username) => {
  rl.question("Nhập mật khẩu: ", (password) => {
    saveUser(username, password);
  });
});
