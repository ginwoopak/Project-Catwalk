/* eslint-disable indent */
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config/config.js';
import ImageGallery from 'react-image-gallery';
import HalfRating from '../R&R/Stars.jsx';
import './productInfo.css';
import 'regenerator-runtime/runtime';

const ProductInfo = function () {
  const { currentItem } = useContext(AppContext);
  const average = 2.5; //THIS NEEDS TO BE IMPORTED FROM R&R SOMEHOW

  //===================
  const [images, setImages] = useState([{}]); //set Images from styles
  const [styles, setStyles] = useState([
    {
      style_id: 240500,
      name: 'Forest Green & Black',
      original_price: '140.00',
      sale_price: null,
      'default?': true,
      photos: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      skus: {
        1394769: {
          quantity: 8,
          size: 'XS',
        },
        1394770: {
          quantity: 16,
          size: 'S',
        },
        1394771: {
          quantity: 17,
          size: 'M',
        },
        1394772: {
          quantity: 10,
          size: 'L',
        },
        1394773: {
          quantity: 15,
          size: 'XL',
        },
        1394774: {
          quantity: 4,
          size: 'XL',
        },
      },
    },
  ]); //store all styles data
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
