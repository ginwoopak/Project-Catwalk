import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const url = 'http://localhost:3000/';

document.addEventListener('click', function (event) {
  let listener = {};
  listener.element = event.target.outerHTML;
  const date = new Date();
  listener.time = date.toLocaleString();
  for (let i in event.path) {
    switch (event.path[i].id) {
      case 'Product-Overview':
      case 'QA':
      case 'Reviews':
      case 'Related':
        listener.widget = event.path[i].id.toString();
        break;
      default:
        break;
    }
  }

  axios
    .post(url + 'interactions', listener)
    .then(() => {
      listener.widget ? console.log(listener.widget) : null;
    })
    .catch((error) => {
      console.log(error);
    });
});

ReactDOM.render(<App />, document.getElementById('app'));
