const apiKey = process.env.OTP_API_KEY;
const apiSecret = process.env.OTP_API_SECRET;
var smsglobal = require("smsglobal")(apiKey, apiSecret);
console.log();

exports.sendOtp = (req, res) => {
  var payload = {
    origin: "NATOUR",
    destination: req.body.destination,
    message: `Natour verification code is : ${req.body.code} `,
    length: 4,
  };
  //   res.json(req.body);
  smsglobal.otp.send(payload, function (error, response) {
    if (response) {
      res.json(response);
    }

    if (error) {
      res.json(error);
    }
  });
};
exports.reSendOtp = (req, res) => {
  res.json({});
};

exports.verification = (req, res) => {
  var destination = req.body.destination;
  var code = req.body.code;

  smsglobal.otp.verifyByDestination(
    destination,
    code,
    function (error, response) {
      if (response) {
        res.json(response);
      }

      if (error) {
        res.json(error);
      }
    }
  );
};
