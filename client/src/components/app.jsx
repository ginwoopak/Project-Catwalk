import React from 'react';
import QuestionsAnswers from './QA/QuestionsAnswers.jsx';
import apiCall from './apiCall.js';

import {
  AddToCart,
  ProductInfo,
  ImageGallery,
} from './ProductDetails/expandedInfo.js';
// eslint-disable-next-line no-unused-vars
import { startSession } from 'mongoose';

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
    this.setState({ currentItem: 'new_ID_here' });
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
          <QuestionsAnswers allProducts={this.state.allProducts}/>
        </div>
      </>
    );
  }
}

export default App;
