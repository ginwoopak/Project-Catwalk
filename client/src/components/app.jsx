import React, { useState, createContext, useEffect, useRef } from 'react';
import QuestionContainer from './QA/QuestionContainer.jsx';
import Reviews from './R&R/Reviews.jsx';
import RelatedProducts from './related/related_products/RelatedProducts.jsx';
import Outfits from './related/outfits/Outfits.jsx';
import ProductInfo from './ProductDetails/expandedInfo.jsx';
import Nav from './nav/Nav.jsx';
import axios from 'axios';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../styles/useDarkMode.js';
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles.js';

export const AppContext = createContext(null);

const App = function () {
  const [outfits, setOutfits] = useState([]);
  const [currentItem, setCurrentItem] = useState({ id: 40344 });
  const [allProducts, setAllProducts] = useState([]);
  const [callId, setId] = useState(40344);
  const [average, setAverage] = useState(0);
  const [reviewBreak, setReviewBreak] = useState({
    ratings: {
      5: '5',
    },
  });

  const [theme, toggleTheme, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // if(!mountedComponent) return <div/>

  const RevRef = useRef(null);

  const getAverage = () => {
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

    return Number((bigOne / totalNumOfValues).toFixed(1));
  };

  useEffect(async () => {
    try {
      const response = await axios.get('products/');
      setAllProducts(response.data);

      const response2 = await axios.get(`products/${callId}`);
      setCurrentItem(response2.data);

      const response3 = await axios.get('outfits');
      setOutfits(Object.keys(response3.data).reverse());
    } catch (error) {
      console.log(error);
    }
  }, [callId]);

  const callAPI = async (params = '', callback) => {
    try {
      callback(await axios.get(params));
    } catch (error) {
      console.log(error);
    }
  };

  const setNewItem = (item) => {
    setId(item);
  };

  const jumpToReviews = () => {
    window.scrollTo({
      top: RevRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const addOutfit = async () => {
    const newData = { id: currentItem.id };
    const getResp = await axios.post('outfits', newData);
    setOutfits(Object.keys(getResp.data).reverse());
  };

  const removeOutfit = async (outfitId) => {
    const removeData = { data: { id: outfitId } };
    const deleteResp = await axios.delete('outfits', removeData);
    setOutfits(Object.keys(deleteResp.data).reverse());
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppContext.Provider
        value={{
          currentItem,
          setCurrentItem,
          allProducts,
          setAllProducts,
          callAPI,
          setId,
          average,
          setAverage,
          reviewBreak,
          setReviewBreak,
          getAverage,
          jumpToReviews,
          outfits,
          addOutfit,
          removeOutfit,
        }}
      >
        <div>
          <div id='Nav'>{currentItem ? <Nav theme={theme} toggleTheme={toggleTheme} /> : null}</div>
          <div id='Product-Overview'>
            {currentItem ? <ProductInfo /> : null}
          </div>
          <div id='Related'>
            {currentItem ? <RelatedProducts /> : null}
            {currentItem ? <Outfits /> : null}
          </div>
          <div id='QA'>{currentItem ? <QuestionContainer /> : null}</div>
          <div id='Reviews' ref={RevRef}>
            {currentItem ? <Reviews className='rev' /> : null}
          </div>
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
