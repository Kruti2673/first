const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  app.listen(port, () => {});
});

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  color: String,
  quantity: Number,
  storename: String,
});

const Product = new mongoose.model("Product", productSchema);

//create operation
const prodct1 = new Product({
  name: "shoes",
  price: 4500.0,
  color: "classy blue",
  quantity: 3,
  storename: "Zudio",
});
prodct1.save().then(() => console.log("product updated"));

//display all
app.get("/", async (req, res) => {
  const data = await Product.find({});
  console.log("data:", data);
  return res.send({ status: true, data });
});

//find(Retrieve) operation
//post
app.post("/find", async (req, res) => {
  // const data = await Product.find({ name: "pen" });
  // console.log("data:", data);
  let data = req.body;
  return res.send({ name: "pen" });
});

//Update operation
//app.put
app.get("/update", async (req, res) => {
  const data = await Product.updateOne({ name: "laptop" }, { name: "activa" });
  console.log("data:", data);
  return res.send({ status: true, data });
});

//Delete operation
//app.delete
app.get("/delete", async (req, res) => {
  const data = await Product.deleteOne({ name: "shoes" });
  console.log("data:", data);
  return res.send({ status: true, data });
});

//count
app.get("/count", async (req, res) => {
  const data = await Product.countDocuments({});
  console.log("data:", data);
  return res.send({ status: true, data });
});
