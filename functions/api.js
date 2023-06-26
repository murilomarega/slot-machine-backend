const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

let records = [];

//Get all students
router.get('/', (req, res) => {
  res.send('App is running..');
});

app.get('/api/games', (req, res) => {
  res.send({ data: gamesList });
});

app.get('/api/reels', (req, res) => {
  res.send({ data: reelsData });
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
