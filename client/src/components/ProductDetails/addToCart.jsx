import React/*, {useState}*/ from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <span>STARS</span><span href='#'>Read All Reviews</span><br/>
        <h6>CATEGORY</h6>
        <h2>Expanded Product Name</h2>
        <a>price</a>
        <h6>Style {'>'} </h6><h6>Selected Style</h6>
        <div>
          {/* Map the styles here */}<img></img>
        </div>
        <select name="size">
          {/* Map the sizes here */}
          <option value="S">Small</option>
        </select>
        <select>
          {/* Map 1-10 */}
          <option value="amt">1</option>
        </select>
        <button>Add to Cart</button>
        <button>Favorite</button>
      </div>
    );
  }
}

export default AddToCart;


// import React, {useState} from 'react';

// const StateTutorial = () => {
//   const [counter, setCounter] = useState(0); //counter is a variable, setCounter is a func that alters counter via passed-in values

//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div>
//       {counter}
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };


