import React, { useState, useContext, useEffect, useMemo } from 'react';

import sampleData from '../sampleData.js';
import Modal from '../modal/Modal.jsx';
import './RelatedProducts.css';
import ProductCard from './ProductCard.jsx';
import { AppContext } from '../../app.jsx';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const RelatedProducts = () => {
  const { currentItem, callAPI } = useContext(AppContext);
  const [relatedProducts, setRelatedProducts] = useState(sampleData);
  const [relatedIds, setRelatedIds] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };

  useEffect(() => {
    callAPI(`products/${currentItem.id}/related`, (response) => {
      setRelatedIds(response.data);
      // console.log(response.data);
    });
  }, [currentItem]);

  return (
    <>
      <h1>Related Products</h1>
      <div className='gridContainer'>
        <Carousel
          arrows={true}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
        >
          {/* {relatedProducts.map((item) => (
            <div className="card" key={item.id}>
              <div className="card__body">
                <img
                  className="card__image"
                  src={item.photos[0].thumbnail_url}
                  // width="100"
                  // height="100"
                />
                <div className="card__category">{item.category}</div>
                <div className="card__name">{item.name}</div>
                <div className="card__price">${item.default_price}</div>
                <div className="card__rate">rate: {item.rate[0]}</div>
              </div>
            </div>
          ))} */}
          {relatedIds.map((id) => {
            // console.log(id);
            return (
              <div className='card' key={id}>
                <ProductCard productId={id} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default RelatedProducts;
