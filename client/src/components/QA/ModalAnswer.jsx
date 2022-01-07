import React, { useState, useEffect, useContext } from 'react';
import './QA.css';
import { AppContext } from '../app.jsx';
import { QuestionContext } from './QuestionContainer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const url = 'http://localhost:3000/';

const ModalAnswer = ( { answerModalOpen, setAnswerModalOpen } ) => {

  const { currentItem, callAPI } = useContext(AppContext);

  const [answerInput, setAnswerInput] = useState('');
  const [nicknameInput, setNicknameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const handleAnswer = (e) => {
    e.preventDefault();
    setAnswerInput(e.target.value);
  };

  const handleNickname = (e) => {
    e.preventDefault();
    setNicknameInput(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmailInput(e.target.value);
  };

  // const postAnswer = () => {
  //   axios
  //     .post(url + 'qa/questions', {
  //       body: answerInput,
  //       name: nicknameInput,
  //       email: emailInput,
  //     })
  //     .then((response) => {
  //       console.log('from modal:', response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // postAnswer();
    console.log('Submitted');
  };

  return (
    <div className='modal darktitle'>
      <form onSubmit={handleSubmit} className='modalContainer'>
        <button
          className='closeBtn'
          onClick={() => {
            setAnswerModalOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} className='closeXIcon' />
        </button>
        <div>
          <h2>Submit your answer</h2>
          <div>
            <h3>{currentItem.name}</h3>
          </div>
        </div>
        <div>
          Answer:
          <div>
            <textarea
              onChange={(e) => {
                handleAnswer(e);
              }}
              rows='3'
              cols='25'
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
              placeholder='Example: jack543!'
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
              placeholder='Example: jack@email.com'
              required
            />
          </div>
          <div>For authentication reasons, you will not be emailed.</div>
        </div>
        <div>
          <input
            type='submit'
            value='Submit'
          />
        </div>
      </form>
    </div>
  );
};

export default ModalAnswer;