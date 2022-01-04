import React, { useState, useContext, useEffect, useMemo } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-regular-svg-icons';
import sampleData from '../sampleData.js';
import './RelatedProducts.css';
// import Modal from '../modal/Modal.jsx';
import { AppContext } from '../../app.jsx';
import HalfRating from '../../R&R/Stars.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../../config/config.js';

const ProductCard = ({ productId }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(2.5); // refactor needed
  const [salesPrice, setSalesPrice] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`,
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setImageUrl(response.data.results[0].photos[0].thumbnail_url);
        setSalesPrice(response.data.results[0].sale_price);
        setPrice(response.data.results[0].original_price);
      });
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`,
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setCategory(response.data.category);
        setName(response.data.name);
        // setPrice(response.data.default_price);
      });
    // axios
    //   .get(
    //     `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`,
    //     {
    //       headers: {
    //         Authorization: API_KEY,
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     setRating(response.data);
    //   });
  }, [productId]);

  return (
    <div>
      <div className='card__body'>
        <img className='card__image' src={imageUrl} />
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
        <div className='card__rate'>
          <HalfRating num={rating || 0} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
