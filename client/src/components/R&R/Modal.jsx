import React from 'react';

const Modal = function () {
  return (
    <div className='modalBackground'>
      <button> X </button>
      <hi>Halelujah</hi>
      <div className='body'>
        <p>yada,yada, yada. Important stuff</p>
        <div className='footer'>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
