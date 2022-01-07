import React, { useState, createContext, useEffect, useRef } from 'react';
// import { AppContext } from '../../app.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faShoppingBag,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const Nav = () => {
  return (
    <header className='nav'>
      <span className='teamlogo'>Lil Bo-Peep</span>
      <div className='navIcons'>
        <span className='fav'>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <span className='cart'>
          <FontAwesomeIcon icon={faShoppingBag} />
        </span>
      </div>
    </header>
  );
};

export default Nav;
