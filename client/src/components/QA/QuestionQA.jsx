import React, { useState } from 'react';

const QuestionQA = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [question, setQuestion] = useState('Will this treat my Psoriasis?');

  return (
    <span className='float_left'>
      <b>Q: {`${props.question}`}</b>
    </span>
  );
};

export default QuestionQA;
