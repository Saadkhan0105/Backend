const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));



// app.get or app.post or app.put or app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World Again!");
});

app.get("/About", (req, res) => {
  res.send("About Me!");
});

app.get("/Contact", (req, res) => {
  res.send("Contact Me!");
});

app.get("/blog", (req, res) => {
  res.send("Blogs!");
});

app.get("/blog/:slug", (req, res) => {
    console.log(req.params); // it will display { slug: intro-to-js }
    console.log(req.query); // it will display { mode: 'dark', region: 'india' }
  res.send(`Hello ${req.params.slug}`);
});



// app.get("/blog/intro-to-js", (req, res) => {
//   res.send("Introduction to JS!");
// });

// app.get("/blog/intro-to-python", (req, res) => {
//   res.send("Introduction to Python!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
