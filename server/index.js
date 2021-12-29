const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
