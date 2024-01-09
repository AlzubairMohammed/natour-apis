const express = require("express");
const { sequelize } = require("./models");
require("dotenv").config();
const notifications = require("./routes/notifications");
const addToken = require("./routes/addToken");
const filterLocations = require("./routes/filterLocations");
const installments = require("./routes/installments");
const httpStatus = require("./utils/httpStatus");
const app = express();
// app.use(express.static("."));
app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.SERVER_PORT || 3001;
const URL = process.env.URL;

app.use(`${URL}notification/`, notifications);
app.use(`${URL}addToken/`, addToken);
app.use(`${URL}filterLocations/`, filterLocations);
app.use(`${URL}userInstallments/`, installments);

// global error handler
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatus.ERROR,
    message: error.message,
    code: error.statusCode || 500,
    data: null,
  });
});

app.listen(PORT, async () => {
  console.log(`server is running at ${PORT}`);
  await sequelize.authenticate();
  console.log("Database connected ...");
});
