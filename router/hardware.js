const express = require("express");
const cpu = require("../datas/cpu.json");

const gpu = require("../datas/gpu.json");
const ram = require("../datas/ram.json");
const router = express.Router();

router.get("/cpu", (req, res) => {
  res.json(cpu);
});
router.get("/gpu", (req, res) => {
  res.json(gpu);
});
router.get("/ram", (req, res) => {
  res.json(ram);
});
module.exports = router;
