const express = require("express");
const headPhones = require("../datas/headphones.json");
const keyboard = require("../datas/keyboard.json");
const monitor = require("../datas/monitor.json");
const mouse = require("../datas/mouse.json");

const router = express.Router();

router.get("/headphones", (req, res) => {
  res.json(headPhones);
});
router.get("/keyboard", (req, res) => {
  res.json(keyboard);
});
router.get("/monitor", (req, res) => {
  res.json(monitor);
});
router.get("/mouse", (req, res) => {
  console.log(JSON.stringify(mouse));
  res.json(mouse);
});
module.exports = router;
