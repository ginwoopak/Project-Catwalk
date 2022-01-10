/* eslint-disable react/jsx-key */
/* eslint-disable indent */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './Nav.jsx';

const Cart = ({ setOpenCart, cartItems }) => {
  const { total } = useContext(CartContext);

  const cartDisplay = () => {
    return <div>{`Your Total: $${total}`}</div>;
  };

  return (
    <div className='cartOpen'>
      <div
        className='cartContainer'
        style={{ height: `calc(39px + 54px * ${cartItems.length} + 65px)` }}
      >
        <button
          className='closeBtn'
          onClick={() => {
            setOpenCart(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} className='closeXIcon' />
        </button>
        <div>
          <h3>Your Cart:</h3>
          <div style={{ position: 'absolute' }}>
            <div className='tableBody'>
              {cartItems && cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div>
                    <div>
                      <div className='cartItem'>
                        <img className='cartThumb' src={item.pic}></img>
                        <div className='itemDesc'>
                          <div className='itemStyle'>
                            <span>{item.name}</span>
                            <span>{' - ' + item.style}</span>
                          </div>
                          <div className='priceSize'>
                            <span>{'$' + item.price}</span>
                            <span>{'Size: ' + item.size}</span>
                            <span>{'Qty: ' + item.quantity}</span>
                            <span>
                              {'Total: $' + item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <span>Your Cart is Empty</span>
                </div>
              )}
              <div className='total'>{total ? cartDisplay() : null}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
