import React, { useState, useContext, useEffect, useMemo } from 'react';
import axios from 'axios';
import { API_KEY } from '../../../../../config/config.js';
import sampleData from '../sampleData.js';
import { AppContext } from '../../app.jsx';
import '../related_products//RelatedProducts.css';

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
            <button className='add_outfit_Btn'>
              {/* <svg className="icon  icon--plus" viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" />
              </svg> */}
              <div id='plus_sign'>+</div>
            </button>
          </div>
          {relatedProducts.map((item) => (
            <div className='card' key={item.id}>
              <div className='card__body'>
                <img
                  className='card__image'
                  src={item.photos[0].thumbnail_url}
                  // width="100"
                  // height="100"
                />
                <div className='card__category'>{item.category}</div>
                <div className='card__name'>{item.name}</div>
                <div className='card__price'>${item.default_price}</div>
                <div className='card__rate'>rate: {item.rate[0]}</div>
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
