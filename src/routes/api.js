const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const auth = require("../middleware/auth");

const {
  createUser,
  handleLogin,
  getUser,
} = require("../controllers/userController");

const routerAPI = express.Router();

routerAPI.all("*", auth);

routerAPI.get("/", (req, res) => {
  return res.status(200).json("Hello world API");
});

routerAPI.post("/register", createUser);
routerAPI.post("/login", handleLogin);

routerAPI.get("/user", getUser);

module.exports = routerAPI; //export default
