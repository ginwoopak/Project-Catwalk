import axios from 'axios';
import { API_KEY } from '../../../config/config.js';

export default function apiCall(callback) {
  let allProducts = [];
  axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/',
    headers: {
      Authorization: API_KEY,
      'Content-Type': 'application/json',
    },
  })
    .then((result) => {
      for (let i in result.data) {
        axios
          .get(
            'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/' +
              result.data[i].id,
            {
              headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json',
              },
            }
          )
          .then((response) => {
            allProducts.push(response.data);
          });
      }
      return result;
    })
    .then((result) => {
      for (let i in result.data) {
        axios
          .get(
            'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/' +
              result.data[i].id +
              '/styles',
            {
              headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json',
              },
            }
          )
          .then((styles) => {
            for (let j in allProducts) {
              if (allProducts[j].id.toString() === styles.data.product_id) {
                allProducts[j].styles = styles.data.results;
                break;
              }
            }
          });
      }
    })
    .then(() => {
      callback(null, allProducts);
    })
    .catch((err) => {
      callback(err);
    });
}
