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
  const [currentItem, setCurrentItem] = useState({ id: 40346 });
  const [allProducts, setAllProducts] = useState([]);
  const [callId, setId] = useState(40344);

  useEffect(async () => {
    try {
      const response = await axios.get(url + 'products/');
      setAllProducts(response.data);
      setCurrentItem(response.data[2]);
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
      }}
    >
      <div>
        {/* {currentItem ? <ProductInfo /> : null}
        {currentItem ? <RelatedProducts /> : null}
        {currentItem ? <Outfits /> : null} */}
        {currentItem ? <QuestionsAnswers /> : null}
        {/* {currentItem ? <Reviews /> : null} */}
      </div>
    </AppContext.Provider>
  );
};

export default App;
