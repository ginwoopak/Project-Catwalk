import React, { useState, useEffect, useContext } from 'react';
import { products, productInfo } from '../sampleData.js';
import './Modal.css';

const Modal = ({ setOpenModal, relatedIds, selectedId, currentId }) => {
  return (
    <div className='modalBackground'>
      <div className='modalContaner'>Modal</div>
    </div>
  );
};

export default Modal;
