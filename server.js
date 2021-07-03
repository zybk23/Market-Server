const express = require("express");
const cors = require("cors");
const app = express();

const test = [
  {
    id: 1,
    name: "taha",
  },
  {
    id: 2,
    name: "zeybek",
  },
  {
    id: 3,
    name: "Berkan",
  },
  {
    id: 4,
    name: "Korkmaz",
  },
];

const port = process.env.PORT || 4000;
app.use(cors());

app.get("/", (req, res) => {
  res.send(test);
});

app.listen(port, () => {
  console.log("server Started");
});
