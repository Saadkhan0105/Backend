const fs = require("fs");

console.log("Starting....")
// fs.writeFileSync("hello.txt", "Hello, World!");

fs.writeFile("hello2.txt", "Hello, World!", () => {
    console.log("File written");
    fs.readFile("hello2.txt", (error, data) => {
        console.log(error, data.toString());
    })
});
fs.appendFile("hello.txt", "Saad Khan", (e, d) => {
    console.log(d)
})
console.log("Ending....")