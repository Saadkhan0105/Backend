const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    position: String,
    language: String,
    salary: Number,
    address: String,
    phone: String,
    email: String,
    isManager: Boolean
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee