import fs from "fs/promises";

let a = await fs.readFile("hello.txt");
console.log(a.toString());

let b = await fs.writeFile("hello2.txt", "This is Promises");
console.log(a.toString(), b);