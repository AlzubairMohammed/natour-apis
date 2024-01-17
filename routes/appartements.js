const router = require("express").Router();
const filesPayloadExists = require("../middlewares/filesPayloadExists");
const fileExtLimiter = require("../middlewares/fileExtLimiter");
const fileSizeLimiter = require("../middlewares/fileSizeLimiter");
const fileUpload = require("express-fileupload");
const {
  appartemntsValidation,
} = require("../middlewares/validations/appartemntsValidation");
const {
  getAppartements,
  createAppartement,
} = require("../controllers/appartements");

router.get("/", getAppartements);
router.post(
  "/",
  fileUpload({ createParentPath: true }),
  filesPayloadExists,
  // fileExtLimiter([".png", ".jpg", ".jpeg"]),
  fileSizeLimiter,
  // variationsValidation(),
  createAppartement
);
// .get("/:id", getInstallment)
// .put(
//   "/:id",
//   fileUpload({ createParentPath: true }),
//   filesPayloadExists,
//   fileExtLimiter([".png", ".jpg", ".jpeg"]),
//   fileSizeLimiter,
//   updateInstallment
// )
// .delete("/:id", deleteInstallment);

module.exports = router;
