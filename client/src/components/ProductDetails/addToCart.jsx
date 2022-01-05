/* eslint-disable indent */
import React, { useContext } from 'react';
import { AppContext } from '../app.jsx';
import HalfRating from '../R&R/Stars.jsx';
import { OverviewContext } from './expandedInfo.jsx';

import './productInfo.css';

const AddToCart = () => {
  const { selected, styles, sku, setSku, selectStyle } =
    useContext(OverviewContext);
  const { currentItem, average, jumpToReviews } = useContext(AppContext);

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
        {selected && selected.skus && sku && selected.skus[sku].quantity > 0 ? (
          <select id='quantity-select'>{loadQuantity()}</select>
        ) : (
          <select>-</select>
        )}
      </div>
      <button>Add to Cart</button>
      <button>Favorite</button>
      <div>Share on social media</div>
    </>
  );
};

export default AddToCart;
