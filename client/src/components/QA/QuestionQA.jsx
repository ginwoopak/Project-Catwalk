import React from 'react';

const QuestionQA = (props) => {
  return (
    <span className='float_left'>
      <b>Q: {`${props.question}`}</b>
    </span>
  );
};

export default QuestionQA;
