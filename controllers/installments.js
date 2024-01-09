const { Product, Image, ProductVariation, Installment } = require("../models");
const path = require("path");
const fs = require("fs");
const ErrorResponse = require("../utils/errorResponse");
const asyncWrapper = require("../middlewares/asyncWrapper");
const httpStatus = require("../utils/httpStatus");
const { validationResult } = require("express-validator");
let fileName;
exports.getInstallments = asyncWrapper(async (req, res) => {
  const data = await Product.findAll({
    include: ["Images"],
    attributes: {
      exclude: ["product_id", "user_id"],
    },
  });
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.getInstallment = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const data = await Product.findOne({
    where: { id },
    attributes: {
      exclude: ["product_id", "user_id"],
    },
  });
  if (!data) {
    const error = ErrorResponse.create(
      "product not found",
      404,
      httpStatus.FAIL
    );
    next(error);
  }
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.createInstallment = asyncWrapper(async (req, res, next) => {
  // return res.json(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = ErrorResponse.create(errors.array(), 400, httpStatus.FAIL);
    return next(error);
  }
  const { files } = req;
  let fileName = "";
  Object.keys(files).forEach((key) => {
    fileName = Date.now() + files[key].name + "";
    const filepath = path.join(__dirname, "../uploads", fileName);
    files[key].mv(filepath, (err) => {
      if (err) {
        const error = ErrorResponse.create(err, 500, httpStatus.FAIL);
        return next(error);
      }
    });
  });
  const data = await Installment.create(req.body);
  console.log("hi");
  const imageDate = await Image.create({
    image: fileName,
    installment_id: data.id,
  });
  if (data && imageDate) {
    return res.json({ status: httpStatus.SUCCESS, data });
  }
});

exports.updateInstallment = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const { files } = req;
  let undefinedError = {};
  const { name, price, qty, user_id, sub_section_id } = req.body;
  console.log(req.body);
  if (!name)
    (undefinedError.err = true), (undefinedError.name = "you must to add name");
  if (!price)
    (undefinedError.err = true),
      (undefinedError.price = "you must to add price");
  if (!qty)
    (undefinedError.err = true),
      (undefinedError.qty = "you must to add quntity");
  if (!user_id)
    (undefinedError.err = true),
      (undefinedError.user_id = "you must to select subcategory");
  if (!sub_section_id)
    (undefinedError.err = true),
      (undefinedError.sub_section_id = "you must to add quntity");
  if (undefinedError.err) return res.status(404).json(undefinedError);
  const product = await Product.update(
    {
      name,
      price,
      qty,
      user_id,
      sub_section_id,
    },
    { where: { id } }
  );
  if (product) {
    const newImage = await Image.findOne({
      where: { product_id: id },
    });
    // Delete old image form uploads directory
    fs.unlinkSync(path.join(__dirname, `../uploads/${newImage.image}`));
    Object.keys(files).forEach((key) => {
      fileName = Date.now() + files[key].name + "";
      const filepath = path.join(__dirname, "../uploads", fileName);
      files[key].mv(filepath, (err) => {
        if (err) return res.status(500).json({ status: "error", message: err });
      });
    });

    const image = await Image.update(
      {
        name,
        image: fileName,
      },
      { where: { product_id: id } }
    );
  }
  res.status(200).json("updated");
});

exports.deleteInstallment = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const { image } = await Image.findOne({
    where: { product_id: id },
  });
  // Delete old image form uploads directory
  fs.unlinkSync(path.join(__dirname, `../uploads/${image}`));
  Object.keys(files).forEach((key) => {
    fileName = Date.now() + files[key].name + "";
    const filepath = path.join(__dirname, "../uploads", fileName);
    files[key].mv(filepath, (err) => {
      if (err) {
        const error = ErrorResponse.create(err, 500, httpStatus.FAIL);
        next(error);
      }
    });
  });
  const imageData = Image.destroy({
    where: { product_id: id },
  });
  const product = await Product.destroy({
    where: { id },
  });
  if (product && image) {
    res.json({ status: httpStatus.SUCCESS, data: `product deleted` });
  }
});