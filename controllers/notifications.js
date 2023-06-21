const { Notification } = require("../models");
const axios = require("axios");

exports.createNotifications = async (req, res) => {
  axios
    .post(
      "https://fcm.googleapis.com/fcm/send",
      {
        registration_ids: [
          "cdIgzGb8SjmP-iuKqQ-JZn:APA91bFtVZNJJwksEILuIJ__JunhBL5mII2pGwomFatIbRwO2MrAuFkyuI5Y65_2X4E09z2CPEcAnEIJ0XLOC45gdUT6pAOhawfaY4GljgXr9ZHT5sIhtzQit1X1F52JILFiFEihnjgh",
          "cXZrrgbdQCCg9NZv5LZz5P:APA91bFDItKj6-0IiIjMpvfBKfLnGyxGdevoJXnc1hJQvU9oEVt0ZmP2nxA7jCzgMVt2M0rD6p2gEZa-yqsGTehXjMUrYwg0WJHkuD0opJh8mJpuxQuudO4DKpUPLKxicd8KnAI4k7T6",
        ],
        notification: req.body,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "key=AAAAswNUAlE:APA91bGTEVPqMno2m8GkEa82r5dpz9PKmdJHHXrAaOOhXvsJfQi_8RAKzwaOzPlBkB_Ifjvu1mFmfHO-FMbYrsCXGWyuy4Ds8fIq0G4FUKLLAxBD2TpNJVCrsCa2eRtC2dE969Rc0N1t",
        },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  let { title, type, body } = req.body;
  let error;
  if (!title && !type && !body) error = "you must fill all fields";
  if (!error) {
    let data = await Notification.create({
      title,
      type,
      body,
    });
    res.status(200).json({ msg: "Notification created successfully", data });
  }
  res.status(404).json(error);
};

exports.getNotifications = async (req, res) => {
  let data = await Notification.findAll({});
  res.status(200).json(data);
};
