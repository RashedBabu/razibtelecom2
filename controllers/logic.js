const { populate } = require("../models/logic");
const Display = require("../models/logic");

exports.getDisplay = async (req, res) => {
  try {
    const alldisplays = await Display.find();
    res.status(200).json(alldisplays);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getEditDisplay = async (req, res) => {
  const id = req.params.id;

  try {
    const display = await Display.findById(id);

    res.status(200).json(display);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createDisplay = async (req, res) => {
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
    const newDisplay = new Display();
    newDisplay.boxNumber = boxNumber;
    newDisplay.productName = productName;
    newDisplay.modelName = modelName;
    newDisplay.quantity = quantity;
    newDisplay.allQuantity = allQuantity;
    newDisplay.price = price;
    newDisplay.date = date;

    await newDisplay.save();

    res.status(201).json({ successMessage: "Create success " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.editDisplayDetails = async (req, res) => {
  const display = req.body;

  try {
    const editDisplay = new Display(display);
    await Display.updateOne({ _id: req.params.id }, editDisplay);
    res.status(201).json({ successMessage: "Seccessfully Updated "});
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deleteLogic = async (req, res) => {
  try {
    await Display.deleteOne({ _id: req.params.id });
    res.json("Secessfully deleted");
  } catch (error) {
    console.log(error);
  }
};


