const router = require("express").Router();
const filesPayloadExists = require("../middlewares/filesPayloadExists");
const fileExtLimiter = require("../middlewares/fileExtLimiter");
const fileSizeLimiter = require("../middlewares/fileSizeLimiter");
const fileUpload = require("express-fileupload");
const {
  installmentsValidation,
} = require("../middlewares/validations/installmentsValidation");
const {
  getInstallments,
  getInstallment,
  createInstallment,
  updateInstallment,
  deleteInstallment,
} = require("../controllers/installments");

router
  .get("/", getInstallments)
  .post(
    "/",
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter([".png", ".jpg", ".jpeg"]),
    fileSizeLimiter,
    installmentsValidation(),
    createInstallment
  )
  .get("/:id", getInstallment)
  .put(
    "/:id",
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter([".png", ".jpg", ".jpeg"]),
    fileSizeLimiter,
    updateInstallment
  )
  .delete("/:id", deleteInstallment);

module.exports = router;
