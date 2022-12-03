const { populate } = require("../models/simTry");
const Touch = require("../models/simTry");

exports.getTouch = async (req, res) => {
  try {
    const alltouch = await Touch.find();
    res.status(200).json(alltouch);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getEditTouch = async (req, res) => {
  const id = req.params.id;

  try {
    const touch = await Touch.findById(id);

    res.status(200).json(touch);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createTouch = async (req, res) => {
  const {
    boxNumber,
    productName,
    modelName,
    quantity,
    allQuantity,
    price,
    date,
  } = req.body;

  try {
    const newTouch = new Touch();
    newTouch.boxNumber = boxNumber;
    newTouch.productName = productName;
    newTouch.modelName = modelName;
    newTouch.quantity = quantity;
    newTouch.allQuantity = allQuantity;
    newTouch.price = price;
    newTouch.date = date;

    await newTouch.save();

    res.status(201).json({ successMessage: "Successfully created " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.editTouchDetails = async (req, res) => {
  const touch = req.body;

  try {
    const editTouch = new Touch(touch);
    await Touch.updateOne({ _id: req.params.id }, editTouch);
    res.status(201).json({ successMessage: "Seccessfully Updated " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deleteSim = async (req, res) => {
  try {
    await Touch.deleteOne({ _id: req.params.id });
    res.json("Secessfully deleted");
  } catch (error) {
    console.log(error);
  }
};
