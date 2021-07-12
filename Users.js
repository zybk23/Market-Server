const express = require("express");
const router = express.Router();

const users = [
  {
    id: 1,
    img: "ayi.png",
    name: "Ali",
    lastName: "Yılmaz",
    task: "IT Manager",
  },
  {
    id: 2,
    img: "bileklik.png",
    name: "Taha",
    lastName: "Zeybek",
    task: "Frontend Developer",
  },
  {
    id: 3,
    img: "cikolata.png",
    name: "Berkan",
    lastName: "Korkmaz",
    task: "Human Resources",
  },
  {
    id: 4,
    img: "igne.png",
    name: "Onur",
    lastName: "Yılmaz",
    task: "QA Engineer",
  },
  {
    id: 5,
    img: "parfum.png",
    name: "Ceren",
    lastName: "Çakır",
    task: "Information Systems Specialist",
  },
];

router.get("/users", (req, res) => {
  res.send(users);
});

module.exports = router;
