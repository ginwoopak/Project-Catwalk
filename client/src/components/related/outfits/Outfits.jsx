import React, { useState, useContext, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmarkCircle,
  faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import sampleData from '../sampleData.js';
import { AppContext } from '../../app.jsx';
import '../related_products//RelatedProducts.css';
import HalfRating from '../../R&R/Stars.jsx';

const Outfits = () => {
  const { currentItem } = useContext(AppContext);
  const [relatedProducts, setRelatedProducts] = useState(sampleData);
  const [firstShowIndex, setFirstShowIndex] = useState(0);

  const prevClick = () => {
    setFirstShowIndex(firstShowIndex - 2);
  };

  const nextClick = () => {
    setFirstShowIndex(firstShowIndex + 2);
  };

  return (
    <>
      <h1>Outfits</h1>
      <div className='productsCardContainer'>
        {firstShowIndex !== 0 && (
          <span
            className='prevArrow'
            onClick={() => {
              prevClick();
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        )}
        <div className='gridContainer'>
          {firstShowIndex === 0 && (
            <div className='card card__body'>
              <div className='add_a_outfit'>Add a Outfit</div>
              <div className='add_outfit_Btn'>
                <FontAwesomeIcon icon={faSquarePlus} className='plusIcon' />
              </div>
            </div>
          )}
          {relatedProducts
            .slice(firstShowIndex, firstShowIndex + 2)
            .map((item) => (
              <div className='card' key={item.id}>
                <div className='card__body'>
                  <button className='icon-tag'>
                    <FontAwesomeIcon icon={faXmarkCircle} className='xIcon' />
                  </button>
                  <img
                    className='card__image'
                    src={item.photos[0].thumbnail_url}
                  />
                  <div className='card__category'>{item.category}</div>
                  <div className='card__name'>{item.name}</div>
                  <div className='card__price'>
                    {item.sale_price ? (
                      <a className='card__sale_price'>
                        ${item.sale_price} &nbsp;
                        <a className='card__ori_price'>
                          ${item.original_price}
                        </a>
                      </a>
                    ) : (
                      <a className='card__ori_price'>${item.original_price}</a>
                    )}
                  </div>
                  <div className='card__rate'>
                    <HalfRating num={item.rate[0] || 0} />
                  </div>
                </div>
              </div>
            ))}
        </div>
        {firstShowIndex !== relatedProducts.length - 3 && (
          <span
            className='nextArrow'
            onClick={() => {
              nextClick();
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        )}
      </div>
    </>
  );
};

export default Outfits;
