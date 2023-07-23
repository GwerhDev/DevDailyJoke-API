const express = require("express");
const router = express.Router();
const dataJokes = require("../data/jokes.json");

router.get('/:lang', async (req, res) => {
  const { lang } = req.params;
  const jokes = dataJokes;
  const currentDate = new Date();
  const day = currentDate.getDate();
  const jokeIndex = day % jokes.length;
  const joke = jokes[jokeIndex][lang];

  res.json(joke);
});

module.exports = router;
