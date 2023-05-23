const express = require("express");
const students = require("./students");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("<html><body><h1>Hello World !!</h1></body></html>");
});

app.get("/students", function (req, res) {
  res.json(students);
});

app.use(express.json());

//post method

app.post("/students", (req, res) => {
  // console.log(req.body);
  // res.send("Students POST Request");

  if (!req.body.email) {
    res.status(400);
    res.json({ error: "email is requierd...." });
  }
  const user = {
    id: students.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  };

  students.push(user);
  res.json(user);
});

app.listen(port, () => {
  console.log("operation performed successfully");
});

//put method
app.put("/students/:id", (req, res) => {
  // const id = req.params.id;
  // console.log(id);
  // res.json(id);

  let id = req.params.id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;

  let index = students.findIndex((student) => {
    return student.id == Number.parseInt(id);
  });

  console.log(id, req.body, index);

  if (index >= 0) {
    let std = students[index];
    std.first_name = first_name;
    std.last_name = last_name;
    std.email = email;
    res.json(std);
  } else {
    res.status(404);
    res.end();
  }
});

//delete method
app.delete("/students/:id", (req, res) => {
  let id = req.params.id;
  let index = students.findIndex((student) => {
    return student.id == Number.parseInt(id);
  });

  if (index >= 0) {
    let std = students[index];
    students.splice(index, 1);
    res.json(std);
  } else {
    res.status(404);
  }
});
