import React from 'react';
import RelatedProducts from './related/related_products/RelatedProducts.jsx';
import Outfits from './related/outfits/Outfits.jsx';

import {
  AddToCart,
  ProductInfo,
  ImageGallery,
} from './ProductDetails/expandedInfo.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: {
        id: 40344,
        data: 0, //
        related: [], //
      },
      allProducts: [{}], //load all products and store features/styles in each obj
    };
  }

  populateData() {}

  clickHandler() {
    this.setState({ currentItem: 0 });
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <RelatedProducts />
        <Outfits />
      </div>

      <>
        AddContext
        <div>
          <ImageGallery />
          <AddToCart />
        </div>
        <ProductInfo />
      </>
    );
  }
}

export default App;
