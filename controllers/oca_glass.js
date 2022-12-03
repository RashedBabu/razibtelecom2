const ocaGlass = require ("../models/oca_glass");

exports.getOca = async(req, res) =>{
    try {
      const allOca = await ocaGlass.find();
      res.status(200).json(allOca);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }

}

exports.getEditOca = async (req, res) => {
  const id = req.params.id;

  try {
    const oca = await ocaGlass.findById(id);

    res.status(200).json(oca);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createOca = async (req, res) => {
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
    const newOca = new ocaGlass();
    newOca.boxNumber = boxNumber;
    newOca.productName = productName;
    newOca.modelName = modelName;
    newOca.quantity = quantity;
    newOca.allQuantity = allQuantity;
    newOca.price = price;
    newOca.date = date;

    await newOca.save();

    res.status(201).json({ successMessage: "Successfully created " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.editOcaDetails = async (req, res) => {
  const oca = req.body;

  try {
    const editOca = new ocaGlass(oca);
    await ocaGlass.updateOne({ _id: req.params.id }, editOca);
    res.status(201).json({ successMessage: "Seccessfully Updated " });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


exports.deleteOca = async (req, res) => {
  try {
    await ocaGlass.deleteOne({ _id: req.params.id });
    res.json("Secessfully deleted");
  } catch (error) {
    console.log(error);
  }
};
