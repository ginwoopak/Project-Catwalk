import React from 'react';
import RelatedProducts from './related/RelatedProducts.jsx';
import Outfits from './outfits/Outfits.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <RelatedProducts />
        <Outfits />
      </div>

    );
  }
}

export default App;