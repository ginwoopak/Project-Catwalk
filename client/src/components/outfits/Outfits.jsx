import React, {useState, useContext, useEffect, useMemo} from 'react';
import {products, productInfo} from '../related/sampleData.js';

const Outfits = () => {
  const [relatedProducts, setRelatedProducts] = useState(products);

  return (
    <>
      <h1>Outfits</h1>
    </>
  );
};

export default Outfits;