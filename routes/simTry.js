const express = require("express");
const router = express.Router();
const {
  getTouch,
  createTouch,
  getEditTouch,
  editTouchDetails,
  deleteSim,
} = require("../controllers/simTry");
const touch = require("../models/simTry");

router.post("/", createTouch);
router.get("/", getTouch);
router.get("/:id", getEditTouch);
router.put("/:id", editTouchDetails);
router.delete("/:id", deleteSim);

module.exports = router;
