import React, {useState, useContext, useEffect, useMemo} from 'react';
import sampleData from '../sampleData.js';
import Modal from '../modal/Modal.jsx';
// import './RelatedProducts.css';

const RelatedProducts = () => {

  const [relatedProducts, setRelatedProducts] = useState(sampleData);
  return (
    <>
      <h1>Related Products</h1>
      <div className="relatedProductsContainer">
        {relatedProducts.map((item) => (
          <div className="card" key={item.id}>
            <div className="card__body">
              <img className="card__image" src={item.photos[0].thumbnail_url} width="100" height="100"/>
              <div className="card__category">{item.category}</div>
              <div className="card__name">{item.name}</div>
              <div className="card__price">${item.default_price}</div>
              <div className="card__rate">rate: {item.rate[0]}</div>
            </div>
          </div>

        ))}
      </div>
    </>
  );
};

export default RelatedProducts;