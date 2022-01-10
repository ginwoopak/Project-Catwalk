/* eslint-disable indent */
import React, { useContext } from 'react';
import { AppContext } from '../app.jsx';
import HalfRating from '../R&R/Stars.jsx';
import { OverviewContext } from './expandedInfo.jsx';
import {
  faHeart,
  faCrow,
  faCameraRetro,
  faBook,
  faParking,
  faPauseCircle,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './productInfo.css';
import axios from 'axios';

const AddToCart = () => {
  const { selected, styles, sku, setSku, selectStyle } =
    useContext(OverviewContext);
  const { currentItem, average, jumpToReviews } = useContext(AppContext);

  const loadQuantity = () => {
    let a = [];
    for (let i = 1; i <= selected.skus[sku].quantity && i <= 15; i++) {
      a.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }
    return a;
  };

  const sizeSelect = (event) => {
    setSku(event.target.value);
  };

  const toggleFave = (event) => {
    event.target.classList.toggle('favorited');
  };

  const addToCart = async () => {
    if (document.getElementById('notice').classList.contains('fade-out')) {
      document.getElementById('notice').classList.toggle('fade-out');
    }
    try {
      await axios.post('cart', {
        item: currentItem,
        style: selected,
        sku_id: sku,
        quantity: document.getElementById('quantity-select').value,
      });
      document.getElementById('notice').classList.toggle('fade-out');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HalfRating num={average || 0} />
      <a href='#' onClick={jumpToReviews}>
        Read All Reviews
      </a>
      <h6>
        Category {'>'} {currentItem.category}
      </h6>
      <h2>{currentItem.name}</h2>
      {selected && selected.sale_price ? (
        <span className='sale-price'>
          ${selected.sale_price}{' '}
          <a className='default-price'>${selected.original_price}</a>
        </span>
      ) : (
        <a>${selected.original_price}</a>
      )}

      <h6>
        Style {'>'} {selected && selected.name ? selected.name : ''}
      </h6>
      <div className='styles'>
        {styles.map((style) => {
          const thumb = style === selected ? 'thumbnail selected' : 'thumbnail';
          return (
            <img
              className={thumb}
              value={style.style_id}
              onClick={() => {
                selectStyle(style.style_id);
              }}
              src={
                style.photos[0].thumbnail_url ||
                './related_product_pics/no_image_available.jpg'
              }
              key={style.style_id}
            ></img>
          );
        })}
      </div>
      <div>
        <label htmlFor='size-select'>Size</label>
        <select id='size-select' name='size' onChange={() => sizeSelect(event)}>
          {selected && selected.skus
            ? Object.entries(selected.skus).map((sku) => (
                <option value={sku[0]} key={sku[0]}>
                  {sku[1].size}
                </option>
              ))
            : ''}
        </select>
        <label htmlFor='quantity-select'>Quantity</label>
        {selected &&
        selected.skus &&
        selected.skus[sku] &&
        selected.skus[sku].quantity > 0 ? (
          <select id='quantity-select'>{loadQuantity()}</select>
        ) : (
          <select>-</select>
        )}
      </div>
      <span>
        <button className='button' onClick={() => addToCart()}>
          Add to Cart
        </button>
        {' Add To Favorites '}
        <FontAwesomeIcon
          id='favorite'
          icon={faHeart}
          onClick={() => toggleFave(event)}
        />
      </span>
      <div>
        <div>Share on social media:</div>
        <span className='icons'>
          <FontAwesomeIcon className='icon' icon={faCrow} />
          <FontAwesomeIcon className='icon' icon={faCameraRetro} />
          <FontAwesomeIcon className='icon' icon={faBook} />
          <FontAwesomeIcon className='icon' icon={faParking} />
          <FontAwesomeIcon className='icon' icon={faRobot} />
          <FontAwesomeIcon className='icon' icon={faPauseCircle} />
        </span>
      </div>
    </>
  );
};

export default AddToCart;
