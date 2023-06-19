const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
