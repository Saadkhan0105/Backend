const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

mongoose.connect("mongodb://localhost:27017/company")
const port = 3000;

app.set("view engine", "ejs");

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1));
    return arr[rno];
}

app.get("/generate", async(req, res) => {

    await Employee.deleteMany({});

    let randomNames =["Saad", "Abuzar", "Maaz", "Fuzail", "Yunus", "Haris", "Osama", "Mohammed", "Faizan", "Farhan"]
    let randomAges = [30, 25, 35, 40, 45, 50, 55, 60, 65, 70]
    let randomPositions = ["Software Engineer", "Software Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "DevOps Engineer", "Data Scientist", "Data Analyst", "Machine Learning Engineer", "AI Engineer"]
    let randomLanguages = ["Python", "JavaScript", "Java", "C++", "C#", "Ruby", "PHP", "Swift", "Kotlin", "Rust"]
    let randomAddresses = ["123 Main St, Los Angeles, CA", "456 Elm St, Los Angeles, CA", "789 Oak St, Los Angeles, CA", "1011 Pine St, Los Angeles, CA", "1213 Maple St, Los Angeles, CA", "1415 Cedar St, Los Angeles, CA", "1617 Walnut St, Los Angeles, CA", "1819 Birch St, Los Angeles, CA", "2021 Spruce St, Los Angeles, CA", "2223 Ash St, Los Angeles, CA"]
    let randomPhones = [ "555-555-5555", "555-555-5556", "555-555-5557", "555-555-5558", "555-555-5559", "555-555-5560", "555-555-5561", "555-555-5562", "555-555-5563", "555-555-5564"]
    let randomEmails = ["saad@example.com", "abuzar@example.com", "maaz@example.com", "fuzail@example.com", "yunus@example.com", "haris@example.com", "osama@example.com", "mohammed@example.com", "faizan@example.com", "farhan@example.com"]
    let randomManagers = ["true", "false"]
    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
          name: getRandom(randomNames),
          age: getRandom(randomAges),
          position: getRandom(randomPositions),
          language: getRandom(randomLanguages),
          salary: Math.floor(Math.random() * 22000),
          address: getRandom(randomAddresses),
          phone: getRandom(randomPhones),
          email: getRandom(randomEmails),
          isManager: Math.random() > 0.5 ? true : false,
        });
        console.log(e);
    }
  res.render("index", { foo: "FOO" });
});

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

