import React from 'react';

const Question = (props) => {

  return (
    <span className='float_left darktitle'>
      <b>Q: {`${props.question}`}</b>
    </span>
  );
};

export default Question;
