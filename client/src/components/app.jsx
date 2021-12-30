import React from "react";
import RelatedProducts from "./related/related_products/RelatedProducts.jsx";
import Outfits from "./related/outfits/Outfits.jsx";
import apiCall from "./apiCall.js";

import {
  AddToCart,
  ProductInfo,
  ImageGallery,
} from "./ProductDetails/expandedInfo.js";
// import { startSession } from "mongoose";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: {},
      allProducts: [],
    };
  }

  componentDidMount() {
    apiCall((err, result) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ allProducts: result });
        console.log(this.state);
      }
    });
  }

  clickHandler() {
    this.setState({ currentItem: "new_ID_here" });
  }

  render() {
    return (
      <>
        {/* AddContext
        <div>
          <ImageGallery />
          <AddToCart />
        </div>
        <ProductInfo /> */}
        <div>
          <RelatedProducts />
          <Outfits />
        </div>
      </>
    );
  }
}

export default App;
