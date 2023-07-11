const { json } = require("sequelize");
const { Notification, AddToken } = require("../models");
const axios = require("axios");
let tokens = [];
let index = 0;
exports.createNotifications = async (req, res) => {
  await AddToken.findAll({
    attributes: ["token"],
  }).then((data) => {
    // console.log([data[0].dataValues.content]);
    data.forEach((element) => {
      tokens[index] = element.dataValues.token;
      index++;
    });
  });
  //   console.log(tokens);
  let { title, type, body } = req.body;
  let error;
  if (!title || !type || !body) error = "you must fill all fields";
  console.log(title && type && body);
  if (!error && tokens) {
    axios
      .post(
        "https://fcm.googleapis.com/fcm/send",
        {
          registration_ids: tokens,
          notification: { title, body },
          data: req.body,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "key=AAAAswNUAlE:APA91bGTEVPqMno2m8GkEa82r5dpz9PKmdJHHXrAaOOhXvsJfQi_8RAKzwaOzPlBkB_Ifjvu1mFmfHO-FMbYrsCXGWyuy4Ds8fIq0G4FUKLLAxBD2TpNJVCrsCa2eRtC2dE969Rc0N1t",
          },
        }
      )
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }
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
