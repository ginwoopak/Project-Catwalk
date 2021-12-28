const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`);
})