const mongoose = require("mongoose");

const oca_glassSchema = new mongoose.Schema(
  {
    boxNumber: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,

      required: true,
    },
    allQuantity: {
      type: String,

      required: true,
    },
    price: {
      type: String,

      required: true,
    },
    date: {
      type: String,
    },
  },
  { timestamps: true }
);

const oca_glass = mongoose.model("oca_glass", oca_glassSchema);

module.exports = oca_glass;
