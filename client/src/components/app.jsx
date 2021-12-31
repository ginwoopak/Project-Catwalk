import React, { useState, createContext, useEffect } from 'react';
import { API_KEY } from '../../../config/config.js';

import ProductInfo from './ProductDetails/expandedInfo.jsx';

import axios from 'axios';

export const AppContext = createContext(null);

const App = function () {
  const [currentItem, setCurrentItem] = useState({ id: 0 });
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/', {
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setAllProducts(response.data);
        return response.data[0].id;
      })
      .then((id) => {
        axios
          .get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
            {
              headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json',
              },
            }
          )
          .then((response) => {
            setCurrentItem(response.data);
          });
      });
  }, []);

  return (
    <AppContext.Provider
      value={{ currentItem, setCurrentItem, allProducts, setAllProducts }}
    >
      <ProductInfo />
    </AppContext.Provider>
  );
};

export default App;
