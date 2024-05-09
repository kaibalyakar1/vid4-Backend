// // function callBack() {
// //   console.log("Hello");
// // }

// const add = function (a, b, callBack) {
//   var res = a + b;
//   console.log(res);
//   callBack();
// };

// add(1, 2, function () {
//   console.log("H");
// });
// // add(1, 2, function () {
// //   console.log("H");
// // });
// // console.log("kk");

const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");
const Person = require("./models/person");

const bodyParser = require("body-parser");
const Menu = require("./models/menu");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const personRoutes = require("./routes/person.routes");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menu.routes");
app.use("/menu", menuRoutes);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
