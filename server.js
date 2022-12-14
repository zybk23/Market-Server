const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./Products");
const companies = require("./Companies");
const users = require("./Users");

const port = process.env.PORT || 4000;
app.use(cors());

app.use("/api", products);
app.use("/api", companies);
app.use("/api", users);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("server Started");
});
