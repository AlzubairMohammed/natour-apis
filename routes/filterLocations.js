const router = require("express").Router();
const { filterLocations } = require("../controllers/filterLocations");
router.get("/", filterLocations);

module.exports = router;
