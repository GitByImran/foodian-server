const express = require("express");
const chef = require("./chefs.json");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("/chef => to get chef data");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app is listening at ${port}`);
});
