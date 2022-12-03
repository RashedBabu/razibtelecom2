const express = require("express");
const router = express.Router();
const {
  getTouch,
  createTouch,
  getEditTouch,
  editTouchDetails,
  deleteGlass,
} = require("../controllers/glass");
const touch = require("../models/glass");

router.post("/", createTouch);
router.get("/", getTouch);
router.get("/:id", getEditTouch);
router.put("/:id", editTouchDetails);
router.delete("/:id", deleteGlass);

module.exports = router;
