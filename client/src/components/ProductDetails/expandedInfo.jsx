/* eslint-disable indent */
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import ImageGallery from 'react-image-gallery';
import HalfRating from '../R&R/Stars.jsx';
import './productInfo.css';
import 'regenerator-runtime/runtime';

const ProductInfo = function () {
  const { currentItem, callAPI } = useContext(AppContext);
  const average = 2.5; //THIS NEEDS TO BE IMPORTED FROM R&R SOMEHOW

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
    if (styles[n] && styles[n].photos) {
      let gallery = [];
      for (let i in styles[n].photos) {
        gallery.push({
          original: styles[n].photos[i].url,
          thumbnail: styles[n].photos[i].thumbnail_url,
        });
      }
      // console.log('style: ', styles[n]);
      setSelected(styles[n]);
      setImages(gallery);
      setSku(Object.keys(styles[n].skus)[0]);
    }
  };

  //====================
  useEffect(() => {
    try {
      // console.log(currentItem.id);
      callAPI(`products/${currentItem.id}/styles`, (response) => {
        setStyles(response.data.results);
        setSelected(response.data.results[0]);
        selectStyle();
      });
    } catch (error) {
      console.log(error);
    }
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
    <div id='product-info'>
      <div className='product'>
        <div className='gallery-container'>
          <ImageGallery
            items={images || null}
            infinite={false}
            showBullets={true}
            showFullscreenButton={true}
            showThumbnails={true}
            showIndex={false}
            showNav={true}
            isRTL={false}
            thumbnailPosition={'left'}
            slideOnThumbnailOver={false}
            additionalClass='image-gallery'
            useWindowKeyDown={true}
          />
        </div>
        <div className='add-to-cart'>
          <HalfRating num={average || 0} />
          <span href='#'> Read All Reviews</span>
          <h6>{currentItem.category}</h6>
          <h2>{currentItem.name}</h2>
          {selected && selected.sale_price ? (
            <a className='sale-price'>
              ${selected.sale_price}{' '}
              <a className='default-price'>${selected.original_price}</a>
            </a>
          ) : (
            <a>${selected.original_price}</a>
          )}

          <h6>
            Style {'>'} {selected && selected.name ? selected.name : ''}
          </h6>
          <div className='styles'>
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
          {selected &&
          selected.skus &&
          sku &&
          selected.skus[sku].quantity > 0 ? (
            <select>{loadQuantity()}</select>
          ) : (
            <a value='sold-out'>SOLD OUT</a>
          )}
          <button>Add to Cart</button>
          <button>Favorite</button>
        </div>
      </div>
      <div className='slogan'>
        <h5>{currentItem.slogan}</h5>
        <a>{currentItem.description}</a>
      </div>
    </div>
  );
};

export default ProductInfo;
