import React, { useState, useEffect, useContext } from 'react';
import './QA.css';
import { AppContext } from '../app.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const ModalQuestion = () => {
  const { currentItem, callAPI } = useContext(AppContext);

  return (
    <div className='modal'>
      <form className='modalContainer'>
        <button
          className='closeBtn'
          // onClick={() => {
          //   setOpenModal(false);
          // }}
        >
          <FontAwesomeIcon icon={faXmark} className='closeXIcon' />
        </button>
        <div>
          <h2>Ask Your Question</h2>
          <div>
            <h3>About the {currentItem.name}</h3>
          </div>
        </div>
        <div>
          Question:
          <div>
            <textarea
              rows='3'
              cols='25'
              placeholder='Example: Why did the chicken cross the road?'
              maxLength='1000'
            ></textarea>
          </div>
        </div>
        <div>
          Nickname:
          <div>
            <input
              type='text'
              size='30'
              maxLength='60'
              placeholder='Example: jackson11!'
            />
          </div>
          <div>
            For privacy reasons, do not use your full name or email address.
          </div>
        </div>
        <div>
          Email:
          <div>
            <input
              type='text'
              size='30'
              maxLength='60'
              placeholder='Example: aol@aol.com'
            />
          </div>
          <div>For authentication reasons, you will not be emailed.</div>
        </div>
        <div>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default ModalQuestion;
