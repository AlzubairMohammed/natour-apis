const AddToken = require("../models/AddToken");

exports.createToken = async (req, res) => {
  const { content } = req.body;
  if (content) {
    await AddToken.create({ content });
  } else {
    res.status(404).json("you must to add a content");
  }
  res.status(200).json(req.body);
};
