import React, { useState, createContext, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import { AppContext } from '../app.jsx';
import Cart from './cart.jsx';
import Toggle from '../Toggle.js';

export const CartContext = createContext(null);

const Nav = ({ theme, toggleTheme }) => {
  const { callAPI } = useContext(AppContext);
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let value = 0;
    for (let i in cartItems) {
      value += cartItems[i].price * cartItems[i].quantity;
    }
    setTotal(value);
  }, [cartItems]);

  const getCart = () => {
    callAPI('cart', async (response) => {
      setCartItems(await response.data);
      setOpenCart(true);
    });
  };

  return (
    <>
      <CartContext.Provider value={{ total }}>
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
        </div>
      </CartContext.Provider>
    </>
  );
};

export default Nav;
