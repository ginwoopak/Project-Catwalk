import React, {useState, useContext, useEffect, useMemo} from 'react';
import sampleData from './sampleData.js';

const RelatedProducts = () => {

  const [relatedProducts, setRelatedProducts] = useState(sampleData);
  return (
    <>
      <h1>Related Products</h1>
      <div className="relatedProductsContainer">
        {relatedProducts.map((item) => (
          <div className="productCard" key={item.id}>
            <img className="productDefaultPic" src={item.photos[0].thumbnail_url}/>
            {/* <img src={require('./pics/onsie.jpg')}/> */}
            <div>{item.category}</div>
            <div>{item.name}</div>
            <div>{item.default_price}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;