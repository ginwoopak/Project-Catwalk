/* eslint-disable indent */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';

import './productInfo.css';
import 'regenerator-runtime/runtime';
import ImgGallery from './imageGallery.jsx';
import AddToCart from './addToCart.jsx';

export const OverviewContext = createContext(null);

const ProductInfo = function () {
  const { currentItem, callAPI } = useContext(AppContext);

  const [images, setImages] = useState([{}]); //set Images from styles
  const [styles, setStyles] = useState([]); //store all styles data
  const [selected, setSelected] = useState({}); //select one style to populate
  const [sku, setSku] = useState(0);

  const selectStyle = async (styleId) => {
    let n = 0;
    if (styleId) {
      for (let i in styles) {
        if (styles[i].style_id === styleId) {
          n = i;
          break;
        }
      }
    }
    if ((await styles[n]) && styles[n].photos) {
      let gallery = [];
      for (let i in styles[n].photos) {
        gallery.push({
          original:
            styles[n].photos[i].url ||
            './related_product_pics/no_image_available.jpg',
          thumbnail:
            styles[n].photos[i].thumbnail_url ||
            './related_product_pics/no_image_available.jpg',
        });
      }
      setSelected(styles[n]);
      setImages(gallery);
      setSku(Object.keys(styles[n].skus)[0]);
    }
  };

  useEffect(() => {
    selectStyle();
  }, [styles]);

  //====================
  useEffect(() => {
    try {
      // console.log(currentItem.id);
      callAPI(`products/${currentItem.id}/styles`, (response) => {
        setStyles(response.data.results);
        // setSelected(response.data.results[0]);
        // selectStyle();
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentItem]);
  //====================

  return (
    <OverviewContext.Provider
      value={{ images, styles, selected, sku, setSku, selectStyle }}
    >
      <div id='product-info'>
        <div className='product'>
          <div className='gallery-container'>
            {images ? <ImgGallery /> : null}
          </div>
          <div className='add-to-cart'>
            <AddToCart />
          </div>
        </div>
        <div className='slogan'>
          <h5>{currentItem.slogan}</h5>
          <a>{currentItem.description}</a>
        </div>
      </div>
    </OverviewContext.Provider>
  );
};

export default ProductInfo;
