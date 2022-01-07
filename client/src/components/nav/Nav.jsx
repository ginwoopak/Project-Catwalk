import React, {
  useState,
  createContext,
  useEffect,
  useRef,
  useContext,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faShoppingBag,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
<<<<<<< HEAD
import { AppContext } from '../app.jsx';
import Cart from './cart.jsx';

const Nav = () => {
  const { callAPI } = useContext(AppContext);
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState(null);

  const getCart = () => {
    callAPI('cart', (response) => {
      console.log(response.data);
      setOpenCart(true);
    });
  };

  return (
    <>
      <header className='nav'>
        <span className='teamlogo'>Lil Bo-Peep</span>
        <div className='navIcons'>
          <span className='fav'>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className='cart'>
            <FontAwesomeIcon onClick={() => getCart()} icon={faShoppingBag} />
          </span>
        </div>
        <div id='notice' className='hidden'>
          Item Added to Cart
        </div>
      </header>
      <div>
        {openCart ? (
          <Cart
            setOpenCart={setOpenCart}
            openCart={openCart}
            cartItems={cartItems}
          />
        ) : null}
=======
import Toggle from '../Toggle.js';

const Nav = ({ theme, toggleTheme }) => {
  return (
    <header className='nav'>
      <span className='teamlogo'>Lil Bo-Peep</span>
      <span className='dark'>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </span>
      <div className='navIcons'>
        <span className='fav'>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <span className='cart'>
          <FontAwesomeIcon icon={faShoppingBag} />
        </span>
>>>>>>> main
      </div>
    </>
  );
};

export default Nav;
