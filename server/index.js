const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const axios = require('axios');
const API_KEY = require('../config/config.js');
const memo = {};

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});

app.get(/products/, (req, res) => {
  // console.log(req.url);
  if (memo[req.path]) {
    res.send(memo[req.path]);
  } else {
    axios({
      url: req.url,
      headers: {
        Authorization: API_KEY.Authorization,
        'Content-Type': 'application/json',
      },
      baseURL: baseURL,
    })
      .then((response) => {
        memo[req.path] = response.data;
        // console.log('API CALLED');
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

app.get(/qa/, (req, res) => {
  // console.log(req.path + `?product_id=${req.query.product_id}`);
  if (memo[req.path + `?product_id=${req.query.product_id}`]) {
    res.send(memo[req.path + `?product_id=${req.query.product_id}`]);
  } else {
    axios({
      url: req.url,
      headers: {
        Authorization: API_KEY.Authorization,
        'Content-Type': 'application/json',
      },
      baseURL: baseURL,
    })
      .then((response) => {
        memo[req.path + `?product_id=${req.query.product_id}`] = response.data;
        // console.log('API CALLED');
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

app.get(/reviews/, (req, res) => {
  // console.log(req.path + `?product_id=${req.query.product_id}`);
  if (memo[req.path + `?product_id=${req.query.product_id}`]) {
    res.send(memo[req.path + `?product_id=${req.query.product_id}`]);
  } else {
    axios({
      url: req.url,
      headers: {
        Authorization: API_KEY.Authorization,
        'Content-Type': 'application/json',
      },
      baseURL: baseURL,
    })
      .then((response) => {
        memo[req.path + `?product_id=${req.query.product_id}`] = response.data;
        // console.log('API CALLED');;
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

app.post(/interactions/, (req, res) => {
  axios({
    method: 'post',
    url: req.url,
    headers: {
      Authorization: API_KEY.Authorization,
      'Content-Type': 'application/json',
    },
    data: req.body,
    baseURL: baseURL,
  })
    .then((response) => {
      console.log(response.data);
      res.sendStatus(201);
    })
    .catch((error) => {
      res.send(error);
    });
});
