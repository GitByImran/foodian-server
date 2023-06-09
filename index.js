const express = require("express");
const chef = require("./chefs.json");
const recipe = require("./recipe.json");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("/chef => to get chef data");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

app.get("/recipe/:id", (req, res) => {
  res.send(recipe.filter((data) => data.id == req.params.id));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app is listening at ${port}`);
});
