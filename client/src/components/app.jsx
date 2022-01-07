import React, { useState, createContext, useEffect, useRef } from 'react';
import QuestionContainer from './QA/QuestionContainer.jsx';
import Reviews from './R&R/Reviews.jsx';
import RelatedProducts from './related/related_products/RelatedProducts.jsx';
import Outfits from './related/outfits/Outfits.jsx';
import ProductInfo from './ProductDetails/expandedInfo.jsx';
import axios from 'axios';

export const AppContext = createContext(null);

const url = 'http://localhost:3000/';

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
      const response = await axios.get(url + 'products/');
      setAllProducts(response.data);

      const response2 = await axios.get(`${url}products/${callId}`);
      setCurrentItem(response2.data);
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

  // const postAPI = async (params = '', callback) => {
  //   try {
  //     callback(await axios.post(url + params));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const setNewItem = (item) => {
    setId(item); //This needs to be the new item ID that we wish to populate
  };

  const jumpToReviews = () => {
    window.scrollTo({
      top: RevRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const addOutfit = async () => {
    let tempOutfits = [...outfits];
    tempOutfits.unshift(currentItem.id);
    setOutfits(Array.from(new Set(tempOutfits)));
  };

  const removeOutfit = (outfitId) => {
    setOutfits(outfits.filter((id) => id !== outfitId));
  };

  return (
    <AppContext.Provider
      value={{
        currentItem,
        setCurrentItem,
        allProducts,
        setAllProducts,
        callAPI,
        setId,
        setNewItem,
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
        {/* <div id='Product-Overview'>{currentItem ? <ProductInfo /> : null}</div>
        <div id='Related'>
          {currentItem ? <RelatedProducts /> : null}
          {currentItem ? <Outfits /> : null}
        </div> */}
        <div id='QA'>{currentItem ? <QuestionContainer /> : null}</div>
        {/* <div id='Reviews' ref={RevRef}>
          {currentItem ? <Reviews className='rev' /> : null}
        </div> */}
      </div>
    </AppContext.Provider>
  );
};

export default App;
