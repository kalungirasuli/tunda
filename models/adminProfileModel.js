const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required:true
  },
  secondname: {
    type: String,
    required:true
  },
  residence: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  role: {
    type: String,
    default: "Admin",
  },
});

module.exports = mongoose.model("Admin", adminSchema);
