const AddToken = require("../models/AddToken");

exports.createToken = async (req, res) => {
  // res.json(req.body);
  const { token, user_id } = req.body;
  if (token && user_id) {
    await AddToken.create({ token, user_id });
  } else {
    res.status(404).json("you must to add a token");
  }
  res.status(200).json(req.body);
};
