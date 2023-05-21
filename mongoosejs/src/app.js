const mongoose = require("mongoose"); //express
mongoose.connect("mongodb://127.0.0.1:27017/test"); //app & port init

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
