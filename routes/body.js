const express = require("express");
const router = express.Router();
const {
  getLcd,
  createLcd,
  getEditLcd,
  editLcdDetails,
  deleteBody,
} = require("../controllers/body");
const lcd = require("../models/body");

router.post("/", createLcd);
router.get("/", getLcd);
router.get("/:id", getEditLcd);
router.put("/:id", editLcdDetails);
router.delete("/:id", deleteBody);

module.exports = router;
