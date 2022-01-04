import React from 'react';
import HelpfulQA from './HelpfulQA.jsx';
import AddAnswerQA from './AddAnswerQA.jsx';

const HelpAddAnswerQA = () => {
  return (
    <span className='float_right small_font'>
      <HelpfulQA /> | <AddAnswerQA />
    </span>
  );
};

export default HelpAddAnswerQA;
