const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("A middleware!");
//   next();
// });

// app.use((req, res, next) => {
//     console.log('Another middleware');
// })

app.use("/about-page", (req, res, next) => {
  console.log("/About Page!");
  res.send("<h1> About Page </h1>");
});

app.use("/", (req, res, next) => {
  console.log("/Home page!");
  res.send("<h1> Hello from maaz </h1>");
});

app.listen(5000);
