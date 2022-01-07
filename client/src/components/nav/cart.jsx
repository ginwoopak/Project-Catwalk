import React, { useState, useEffect, useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ setOpenCart, openCart, cartItems }) => {
  return (
    <div className='modal'>
      <div className='modalContainer'>
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
          <table>
            <tbody className='tableBody'>
              {cartItems
                ? cartItems.map((item) => <a key={item}>{item.name}</a>)
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
