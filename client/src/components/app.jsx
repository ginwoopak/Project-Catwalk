import React from "react";
import QuestionsAnswers from "./QA/QuestionsAnswers.jsx";

import {
  AddToCart,
  ProductInfo,
  ImageGallery,
} from "./ProductDetails/expandedInfo.js";

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
      <>
        {/* <div>
          <ImageGallery />
          <AddToCart />
        </div>
        <ProductInfo /> */}
        <div>
          <QuestionsAnswers />
        </div>
      </>
    );
  }
}

export default App;
