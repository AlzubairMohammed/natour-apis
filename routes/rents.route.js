const router = require("express").Router();

const {
  createNotifications,
  getNotifications,
} = require("../controllers/notifications");

router.post("/", createNotifications).get("/", getNotifications);

module.exports = router;
