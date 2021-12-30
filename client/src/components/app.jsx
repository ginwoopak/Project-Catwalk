import React from "react";
import apiCall from "./apiCall.js";
import Ratings from "./R&R/Ratings.jsx";
import Reviews from "./R&R/Reviews.jsx";

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
        <div>
          <ImageGallery />
          <AddToCart />
        </div>
        <ProductInfo />

        <div>
          <Ratings />
          <Reviews />
        </div>
      </>
    );
  }
}

export default App;
