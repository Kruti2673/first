const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

const Kitten = mongoose.model("Kitten", { name: String });

//to create
// const kitty = new Kitten({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

// const kitt = new Kitten({ name: "abc" });
// kitt.save().then(() => console.log("meow"));

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

//to find all
// app.get("/", async (req, res) => {
//   const data = await Kitten.find({ name: "abc" });
//   console.log("data:", data);
//   return res.send({ status: true, data });
// });

//to find any one
// app.get("/", async (req, res) => {
//   const data = await Kitten.findOne({ name: "abc" });
//   console.log("data:", data);
//   return res.send({ status: true, data });
// });

//to find 1 and delete
// app.get("/", async (req, res) => {
//   const data = await Kitten.findOneAndDelete({ name: "abc" });
//   console.log("data:", data);
//   return res.send({ status: true, data });
// });

//delete one
// app.get("/", async (req, res) => {
//   const data = await Kitten.deleteOne({ name: "abc" });
//   console.log("data:", data);
//   return res.send({ status: true, data });
// });

//to find 1 and update
// app.get("/", async (req, res) => {
//   const data = await Kitten.findOneAndUpdate({ name: "kuku" });
//   console.log("data:", data);
//   return res.send({ status: true, data });
// });

//update one
// app.get("/", async (req, res) => {
//   const data = await Kitten.updateOne({ name: "abc" }, { name: "kuk" });
//   console.log("data:", data);
//   return res.send({ status: true, data });
// });

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
