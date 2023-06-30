const router = require("express").Router();
const { filterLocations } = require("../controllers/filterLocations");
router.post("/", filterLocations);

module.exports = router;
