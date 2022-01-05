import React from 'react';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';

const HelpfulAddAnswer = (props) => {

  return (
    <span className='float_right small_font'>
      <Helpful helpful={props.question.question_helpfulness}/> | <AddAnswer />
    </span>
  );
};

export default HelpfulAddAnswer;
