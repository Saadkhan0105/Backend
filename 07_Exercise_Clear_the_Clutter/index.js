/*
You have to write a node.js program to clear clutter inside a directory. Organize the content
of that directory into different folders.

for example these files becomes:
1. name.jpg
2. name.png
3. this.pdf
4. saad.zip
5. khan.zip
6. cat.jpg

this: 
jpg/name.jpg, cat.jpg
png/name.png
pdf/this.pdf
zip/saad.zip, zip/khan.zip



import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\iitia\\Downloads\\Sigma Web Development Course\\Sigma-Web-Dev-Course\\Video 93"

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {


        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}
*/


import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "//Users//saadkhan//Developer//Backend//07_Exercise_Clear_the_Clutter"

let files = await fs.readdir(basepath);
console.log(files);

for (const item of files) {
  console.log("running for ", item);
  let ext = item.split(".")[item.split(".").length - 1];
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(basepath, ext))) {
      // Move the file to this directory if its not a js or json file
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    } else {
      fs.mkdir(ext);
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    }
  }
}

