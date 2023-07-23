const express = require('express');
const router = express.Router();
const getDevDailyJoke = require('../controllers/get-devdailyjoke');

router.use('/', getDevDailyJoke);

module.exports = router;