const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test");

import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = new Schema({
  name: String,
  price: String,
  color: String,
  quantity: String,
  storename: String,
});

const pro = mongoose.model("pro", Product);

const prodct1 = new roduct(
  { name: "pen" },
  { price: "700.0" },
  { color: "red" },
  { quantity: "5" },
  { storename: "atul" }
);
prodct1.save().then(() => console.log("product updated"));
