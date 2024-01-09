const express = require("express");
const { sequelize } = require("./models");
require("dotenv").config();
const notifications = require("./routes/notifications");
const addToken = require("./routes/addToken");
const filterLocations = require("./routes/filterLocations");
const installments = require("./routes/installments");
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
app.use(`${URL}installments/`, installments);

app.listen(PORT, async () => {
  console.log(`server is running at ${PORT}`);
  await sequelize.authenticate();
  console.log("Database connected ...");
});
