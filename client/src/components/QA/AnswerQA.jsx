import React from 'react';

const AnswerQA = (props) => {
  return (
    <div className='align_left'>
      <b>A: </b>
      <span className='small_font'>{`${props.answer.body}`}</span>
    </div>
  );
};

export default AnswerQA;
