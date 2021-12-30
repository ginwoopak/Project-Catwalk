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
    apiCall
      .then((result) => {
        this.setState({ allProducts: result });
        console.log('allProducts: ', this.state.allProducts); //REMOVE THIS LINE WHEN SHIPPING APP
        return this.state;
      })
      .then((state) => {
        setTimeout(() => {
          this.setState({ currentItem: state.allProducts[0] });
          console.log('currentItem: ', this.state.currentItem); //REMOVE THIS LINE WHEN SHIPPING APP
        }, 500);
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
