/* eslint-disable indent */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import HalfRating from '../R&R/Stars.jsx';
import { OverviewContext } from './expandedInfo.jsx';

import './productInfo.css';

const AddToCart = () => {
  const { selected, styles, sku, setSku, selectStyle } =
    useContext(OverviewContext);
  const { currentItem } = useContext(AppContext);
  const average = 2.5; //THIS NEEDS TO BE IMPORTED FROM R&R SOMEHOW

  const loadQuantity = () => {
    let a = [];
    for (let i = 1; i <= selected.skus[sku].quantity && i <= 15; i++) {
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
      <HalfRating num={average || 0} />
      <a href='#'> Read All Reviews</a>
      <h6>{currentItem.category}</h6>
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
      {selected && selected.skus && sku && selected.skus[sku].quantity > 0 ? (
        <select>{loadQuantity()}</select>
      ) : (
        <a value='sold-out'>SOLD OUT</a>
      )}
      <button>Add to Cart</button>
      <button>Favorite</button>
    </>
  );
};

export default AddToCart;
