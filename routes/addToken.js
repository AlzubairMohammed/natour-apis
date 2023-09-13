const router = require("express").Router();
const { createToken } = require("../controllers/addToken");
router.post("/", createToken);

module.exports = router;
