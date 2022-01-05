import React, { useState, useContext, useEffect, useMemo } from 'react';
import sampleData from '../sampleData.js';
import './RelatedProducts.css';

import HalfRating from '../../R&R/Stars.jsx';
import { AppContext } from '../../app.jsx';
import products from '../sampleData.js';

const ProductCard = ({ productId }) => {
  const { currentItem, callAPI } = useContext(AppContext);
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(2.5); // refactor needed
  const [salesPrice, setSalesPrice] = useState(0);

  useEffect(() => {
    callAPI(`products/${productId}/styles`, (response) => {
      setImageUrl(response.data.results[0].photos[0].thumbnail_url);
      setSalesPrice(response.data.results[0].sale_price);
      setPrice(response.data.results[0].original_price);
    });
    callAPI(`products/${productId}`, (response) => {
      setCategory(response.data.category);
      setName(response.data.name);
    });
  }, [productId]);

  return (
    <div className='card__body'>
      {imageUrl ? (
        <img className='card__image' src={imageUrl} />
      ) : (
        <img
          className='card__image'
          src={'./related_product_pics/no_image_available.jpg'}
        />
      )}
      <div className='card__category'>{category}</div>
      <div className='card__name'>{name}</div>
      <div className='card__price'>
        {salesPrice ? (
          <a className='card__sale_price'>
            ${salesPrice} &nbsp;
            <a className='card__ori_price'>${price}</a>
          </a>
        ) : (
          <a className='card__ori_price'>${price}</a>
        )}
      </div>
      {/* <div className="card__rate">rate: {rating}</div> */}
      <div className='card__rate'>
        <HalfRating num={rating || 0} />
      </div>
    </div>
  );
};

export default ProductCard;
