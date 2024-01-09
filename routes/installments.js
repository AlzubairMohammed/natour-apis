const router = require("express").Router();
const filesPayloadExists = require("../middleware/filesPayloadExists");
const fileExtLimiter = require("../middleware/fileExtLimiter");
const fileSizeLimiter = require("../middleware/fileSizeLimiter");
const fileUpload = require("express-fileupload");
const {
  installmentsValidation,
} = require("../validation/installmentsValidation");
const {
  getinstallments,
  getInstallment,
  createInstallment,
  updateProdcut,
  deleteInstallment,
} = require("../controllers/installments");

router
  .get("/", getinstallments)
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
    updateProdcut
  )
  .delete("/:id", deleteInstallment);

module.exports = router;
