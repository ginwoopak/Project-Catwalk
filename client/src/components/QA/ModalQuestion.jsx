import React, { useState, useEffect, useContext } from 'react';
import './QA.css';
import { AppContext } from '../app.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ModalQuestion = ({ questionModalOpen, setQuestionModalOpen }) => {
  const { currentItem, callAPI } = useContext(AppContext);

  const [questionInput, setQuestionInput] = useState('');
  const [nicknameInput, setNicknameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const handleQuestion = (e) => {
    e.preventDefault();
    setQuestionInput(e.target.value);
  };

  const handleNickname = (e) => {
    e.preventDefault();
    setNicknameInput(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmailInput(e.target.value);
  };

  const postQuestion = () => {
    axios
      .post('qa/questions', {
        body: questionInput,
        name: nicknameInput,
        email: emailInput,
        product_id: currentItem.id,
      })
      .then((response) => {
        console.log('from modal:', response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postQuestion();
  };

  return (
    <div className='modal darktitle'>
      <form onSubmit={handleSubmit} className='modalContainer'>
        <button
          className='closeBtn'
          onClick={() => {
            setQuestionModalOpen(false);
          }}
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
              onChange={(e) => {
                handleQuestion(e);
              }}
              rows='3'
              cols='25'
              placeholder='Example: Why did the chicken cross the road?'
              maxLength='1000'
              required
            ></textarea>
          </div>
        </div>
        <div>
          Nickname:
          <div>
            <input
              onChange={(e) => {
                handleNickname(e);
              }}
              type='text'
              size='30'
              maxLength='60'
              placeholder='Example: jackson11!'
              required
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
              onChange={(e) => {
                handleEmail(e);
              }}
              type='email'
              size='30'
              maxLength='60'
              placeholder='Example: aol@aol.com'
              required
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
