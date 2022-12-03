const mongoose = require("mongoose");

const ribonSchema = new mongoose.Schema(
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

const ribon = mongoose.model("ribon-switch", ribonSchema);

module.exports = ribon;
