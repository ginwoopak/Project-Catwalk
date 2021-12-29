import React, {useState, useContext, useEffect, useMemo} from 'react';
import {products, productInfo} from './sampleData.js';

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState(products);
  // console.log('sample length', products.length);
  return (
    <>
      <h1>Related Products</h1>
    </>
  );
};

export default RelatedProducts;