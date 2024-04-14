const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port =  5000;
const ejs= require('ejs')
const bodyParser = require("body-parser");
const Uploads = require("./routes/ProductUplaod")
const Login=require('./routes/login')
const Admin=require('./routes/Admin')
const index=require('./routes/indexpage')
const dotenv=require('dotenv')
const user=require('./routes/user')
dotenv.config()
app.set("view engine", 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",Uploads)
app.use('/',Login)
app.use('/',Admin)
app.use('/',user)
app.use('/',index)
mongoose.connect("mongodb://localhost:27017/", {//use database.connect
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to db");
});
db.on("error", (err) => {
  console.error(err);
});
app.use(express.static(path.join(__dirname, "public/files")));
app.listen(port, () => {
  console.log(`https:${port}`);
});
