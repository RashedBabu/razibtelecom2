const express = require("express");
const router = express.Router();

const {
  getOca,
  createOca,
  getEditOca,
  editOcaDetails,
  deleteOca,
} = require("../controllers/oca_glass");

const OcaGlass = require("../models/oca_glass");

router.post("/", createOca);
router.get("/", getOca);
router.get("/:id", getEditOca);
router.put("/:id", editOcaDetails);
router.delete("/:id", deleteOca);

module.exports = router;
