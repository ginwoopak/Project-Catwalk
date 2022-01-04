import React, { useState, useContext, useEffect, useMemo } from 'react';
import sampleData from '../sampleData.js';
import './RelatedProducts.css';

import { AppContext } from '../../app.jsx';
import products from '../sampleData.js';

const ProductCard = ({ productId }) => {
  const { currentItem, callAPI } = useContext(AppContext);
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [salesPrice, setSalesPrice] = useState(0);

  useEffect(() => {
    callAPI(`products/${productId}/styles`, (response) => {
      console.log('styles: ', response.data);
      setImageUrl(response.data.results[0].photos[0].thumbnail_url);
      setSalesPrice(response.data.results[0].sale_price);
    });
    callAPI(`products/${productId}`, (response) => {
      console.log('product id: ', response.data);

      setCategory(response.data.category);
      setName(response.data.name);
      setPrice(response.data.default_price);
    });
  }, [productId]);

  return (
    //
    <div className='card__body'>
      {/* <button aria-label="button">
        <i className="far fa-star star fa-lg "></i>
      </button> */}
      <img className='card__image' src={imageUrl} />
      <div className='card__category'>{category}</div>
      <div className='card__name'>{name}</div>
      <div className='card__price'>${price}</div>
      {/* <div className="card__rate">rate: {rating}</div> */}
      <div className='card__rate'>rate: 5</div>
      {/* {productId} */}
    </div>
  );
};

export default ProductCard;
