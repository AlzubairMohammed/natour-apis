const router = require("express").Router();

const {
  createNotifications,
  getNotifications,
} = require("../controllers/notifications");

router.post("/", createNotifications);
router.get("/", getNotifications);

module.exports = router;
