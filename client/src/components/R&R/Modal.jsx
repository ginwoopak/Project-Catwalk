import React from 'react';

const Modal = function (props) {
  return (
    <div className='modalBackground'>
      <button
        onClick={() => {
          props.func(false);
        }}
      >
        {' '}
        X{' '}
      </button>
      <h1>New Review</h1>
      <div className='body'>
        <div>Overall Rating</div>
        <div>
          Do You Recommend This Product?
          <button>Yes</button>
          <button>No</button>
        </div>
        <div>Characteristics</div>
        <div>
          Review Body
          <textarea
            defaultValue={'Why did you like the product or not?'}
          ></textarea>
        </div>
        <div>
          What is your nickname?
          <textarea defaultValue={'Example: jackson11!'}></textarea>
          For privacy reasons, do not use your full name or email address
        </div>
        <div>
          Your email
          <textarea defaultValue={'Example: jackson11@email.com'}></textarea>
          For authentication reasons, you will not be emailed
        </div>

        <div className='footer'>
          <button
            onClick={() => {
              props.func(false);
            }}
          >
            Cancel
          </button>
          <button>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
