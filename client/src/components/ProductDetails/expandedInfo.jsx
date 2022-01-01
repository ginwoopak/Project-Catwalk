/* eslint-disable indent */
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config/config.js';
import ImageGallery from 'react-image-gallery';
import './productInfo.css';

const ProductInfo = function () {
  const { currentItem } = useContext(AppContext);

  //===================
  const [images, setImages] = useState([{}]); //set Images from styles
  const [styles, setStyles] = useState([]); //store all styles data
  const [selected, setSelected] = useState({}); //select one style to populate
  const [sku, setSku] = useState(0);

  const selectStyle = (styleId) => {
    let n = 0;
    if (styleId) {
      for (let i in styles) {
        if (styles[i].style_id === styleId) {
          n = i;
          break;
        }
      }
    }
    let gallery = [];
    for (let i in styles[n].photos) {
      gallery.push({
        original: styles[n].photos[i].url,
        thumbnail: styles[n].photos[i].thumbnail_url,
      });
    }
    console.log('style: ', styles[n]);
    setSelected(styles[n]);
    setImages(gallery);
    setSku(Object.keys(styles[n].skus)[0]);
  };

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem.id}/styles`,
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        // console.log('selected style: ', response.data.results[0]);
        // console.log('Current Item: ', currentItem);
        setStyles(response.data.results);
        setSelected(response.data.results[0]);
        selectStyle();
      });
  }, [currentItem]);
  //====================

  const loadQuantity = () => {
    let a = [];
    for (let i = 1; i <= selected.skus[sku].quantity; i++) {
      a.push(
        <option value='amt' key={i}>
          {i}
        </option>
      );
    }
    return a;
  };

  const sizeSelect = (event) => {
    setSku(event.target.value);
  };

  return (
    <>
      <div className='gallery-container'>
        <ImageGallery
          items={images || null}
          infinite={true}
          showBullets={true}
          showFullscreenButton={true}
          showThumbnails={true}
          showIndex={false}
          showNav={true}
          isRTL={false}
          thumbnailPosition={'bottom'}
          slideOnThumbnailOver={false}
          additionalClass='app-image-gallery'
          useWindowKeyDown={true}
        />
      </div>
      <>
        <span>STARS </span>
        <span href='#'> Read All Reviews</span>
        <h6>{currentItem.category}</h6>
        <h2>{currentItem.name}</h2>
        <a>{currentItem.default_price}</a>
        <h6>
          Style {'>'} {selected && selected.name ? selected.name : ''}
        </h6>
        <div>
          {styles.map((style) => {
            return (
              <img
                className='thumbnail'
                value={style.style_id}
                onClick={() => selectStyle(style.style_id)}
                src={style.photos[0].thumbnail_url}
                key={style.style_id}
              ></img>
            );
          })}
          <img></img>
        </div>
        <select name='size' onChange={() => sizeSelect(event)}>
          {selected && selected.skus
            ? Object.entries(selected.skus).map((sku) => (
                <option value={sku[0]} key={sku[0]}>
                  {sku[1].size}
                </option>
              ))
            : ''}
        </select>
        {selected && selected.skus && sku && selected.skus[sku].quantity > 0 ? (
          <select>{loadQuantity()}</select>
        ) : (
          <a value='amt'>SOLD OUT</a>
        )}
        <button>Add to Cart</button>
        <button>Favorite</button>
      </>
      <>
        <h5>{currentItem.slogan}</h5>
        <a>{currentItem.description}</a>
      </>
    </>
  );
};

export default ProductInfo;
