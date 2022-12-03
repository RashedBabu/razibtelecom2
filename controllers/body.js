const { populate } = require("../models/body");
const Lcd = require("../models/body");


exports.getLcd = async (req, res) => {
  try {
    const alllcd = await Lcd.find();
    res.status(200).json(alllcd);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getEditLcd = async (req, res) => {
  const id = req.params.id;

  try {
    const lcd = await Lcd.findById(id);

    res.status(200).json(lcd);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createLcd = async (req, res) => {
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
    const newLcd = new Lcd();
    newLcd.boxNumber = boxNumber;
    newLcd.productName = productName;
    newLcd.modelName = modelName;
    newLcd.quantity = quantity;
    newLcd.allQuantity = allQuantity;
    newLcd.price = price;
    newLcd.date = date;

    await newLcd.save();

    res.status(201).json({ successMessage: "Create success " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.editLcdDetails = async (req, res) => {
  const lcd = req.body;

  try {
    const editLcd = new Lcd(lcd);
    await Lcd.updateOne({ _id: req.params.id }, editLcd);
    res.status(201).json({ successMessage: "Seccessfully Updated " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deleteBody = async (req, res) => {
  try {
    await Lcd.deleteOne({ _id: req.params.id });
    res.json("Secessfully deleted");
  } catch (error) {
    console.log(error);
  }
};
