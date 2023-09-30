const router = require("express").Router();

const { sendOtp, reSendOtp, verification } = require("../controllers/otp");

router
  .post("/send", sendOtp)
  .post("/resend", reSendOtp)
  .post("/verification", verification);

module.exports = router;
