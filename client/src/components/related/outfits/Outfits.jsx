import React, { useState, useContext, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmarkCircle,
  faPlusSquare,
  faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { API_KEY } from '../../../../../config/config.js';
import sampleData from '../sampleData.js';
import { AppContext } from '../../app.jsx';
import '../related_products//RelatedProducts.css';
import HalfRating from '../../R&R/Stars.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Outfits = () => {
  const { currentItem } = useContext(AppContext);
  const [relatedProducts, setRelatedProducts] = useState(sampleData);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };

  return (
    <>
      <h1>Outfits</h1>
      <div className='gridContainer'>
        <Carousel
          arrows={true}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
        >
          <div className='card'>
            <div className='add_a_outfit'>Add a Outfit</div>
            <div className='add_outfit_Btn'>
              <FontAwesomeIcon icon={faSquarePlus} className='plusIcon' />
            </div>
          </div>
          {relatedProducts.map((item) => (
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
                      <a className='card__ori_price'>${item.original_price}</a>
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
          {/* {relatedIds.map((id) => (
            <div className="card" key={id}>
              <ProductCard productId={id} />
            </div>
          ))} */}
        </Carousel>
      </div>
    </>
  );
};

export default Outfits;
