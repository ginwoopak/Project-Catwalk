import RelatedProducts from './related/related_products/RelatedProducts.jsx';
import Outfits from './related/outfits/Outfits.jsx';
import apiCall from './apiCall.js';
import React, { useState, createContext, useEffect } from 'react';
import { API_KEY } from '../../../config/config.js';
import QuestionsAnswers from './QA/QuestionsAnswers.jsx';
import Reviews from './R&R/Reviews.jsx';
import RatingBreakdown from './R&R/RatingBreakdown.jsx';

import {
  AddToCart,
  ProductInfo,
  ImageGallery,
} from './ProductDetails/expandedInfo.js';

import axios from 'axios';

// get question data into component
// set up mapping function for list
// set up individualQA

export const AppContext = createContext(null);

const App = function () {
  const [currentItem, setCurrentItem] = useState({ id: 40345 });
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
        console.log('allProducts updated', response.data);
        return response.data[1].id;
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
            console.log('currentItem updated');
          });
      });
  }, []);

  return (
    <AppContext.Provider
      value={{ currentItem, setCurrentItem, allProducts, setAllProducts }}
    >
      <div>
        <ImageGallery />
        <AddToCart />
      </div>
      <ProductInfo />

      <div>
        <RelatedProducts />
        <Outfits />
      </div>
      <div >
        <QuestionsAnswers />
      </div>
      <RatingBreakdown />
      <Reviews />
    </AppContext.Provider>
  );
};

export default App;
