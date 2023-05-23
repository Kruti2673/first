const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("<html><body><h1>Hello World</h1></body></html>");
});

//insert data
app.post("/submit", function (req, res) {
  res.send("POST Request");
});

//update data
app.put("/update", function (req, res) {
  res.send("PUT Request");
});

//delete data
app.delete("/delete", function (req, res) {
  res.send("DELETE Request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
