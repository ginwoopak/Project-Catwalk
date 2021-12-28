import React/*, {useState}*/ from 'react';

import {AddToCart, ProductInfo, ImageGallery} from './ProductDetails/expandedInfo.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <ImageGallery />
        <AddToCart />
        <ProductInfo />
      </div>
    );
  }
}

export default App;