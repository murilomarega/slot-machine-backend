const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const cors = require('cors');

const gamesList = require('./game-data.json');
const reelsData = require('./reels-data.json');

app.use(cors());

router.get('/', (req, res) => {
  res.send('App is running..');
});

router.get('/games', (req, res) => {
  res.send({ data: gamesList });
});

router.get('/reels', (req, res) => {
  res.send({ data: reelsData });
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
