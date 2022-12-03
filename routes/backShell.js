const express = require("express");
const router = express.Router();
const {
  getTouch,
  createTouch,
  getEditTouch,
  editTouchDetails,
  deleteBackShell,
} = require("../controllers/backShell");
const touch = require("../models/backShell");

router.post("/", createTouch);
router.get("/", getTouch);
router.get("/:id", getEditTouch);
router.put("/:id", editTouchDetails);
router.delete("/:id", deleteBackShell);

module.exports = router;
