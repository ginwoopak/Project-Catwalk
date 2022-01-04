import React, { useState, createContext, useEffect } from 'react';
import QuestionsAnswers from './QA/QuestionsAnswers.jsx';
import Reviews from './R&R/Reviews.jsx';
import RelatedProducts from './related/related_products/RelatedProducts.jsx';
import Outfits from './related/outfits/Outfits.jsx';
import ProductInfo from './ProductDetails/expandedInfo.jsx';
import axios from 'axios';

export const AppContext = createContext(null);

const url = 'http://localhost:3000/';

const App = function () {
  const [currentItem, setCurrentItem] = useState({ id: 40344 });
  const [allProducts, setAllProducts] = useState([]);
  const [callId, setId] = useState(40344);
  const [average, setAverage] = useState(0);
  const [
    reviewBreak,
    setReviewBreak,
    getAverage = () => {
      var avgArray = Object.values(reviewBreak.ratings);
      var indArray = Object.keys(reviewBreak.ratings);
      var totalNumOfValues = 0;
      var sumOfNumbers = 0;
      var bigOne = 0;

      avgArray.forEach((element, index) => {
        totalNumOfValues = totalNumOfValues + Number(element);
        sumOfNumbers = indArray[index] * Number(element);
        bigOne = bigOne + sumOfNumbers;
      });

      return (bigOne / totalNumOfValues).toFixed(1);
    },
  ] = useState({
    ratings: {
      5: '5',
    },
  });

  useEffect(async () => {
    try {
      const response = await axios.get(url + 'products/');
      setAllProducts(response.data);
      setCurrentItem(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  }, [callId]);

  const callAPI = async (params = '', callback) => {
    try {
      callback(await axios.get(url + params));
    } catch (error) {
      console.log(error);
    }
  };

  const setNewItem = (item) => {
    setId(item.id); //This needs to be the new item ID that we wish to populate
  };

  return (
    <AppContext.Provider
      value={{
        currentItem,
        setCurrentItem,
        allProducts,
        setAllProducts,
        callAPI,
        setNewItem,
        average,
        setAverage,
        reviewBreak,
        setReviewBreak,
        getAverage,
      }}
    >
      <div>
        {currentItem ? <ProductInfo /> : null}
        {currentItem ? <RelatedProducts /> : null}
        {currentItem ? <Outfits /> : null}
        {currentItem ? <QuestionsAnswers /> : null}
        {currentItem ? <Reviews className='rev' /> : null}
      </div>
    </AppContext.Provider>
  );
};

export default App;
