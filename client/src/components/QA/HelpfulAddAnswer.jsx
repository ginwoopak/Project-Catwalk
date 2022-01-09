import React from 'react';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';

const HelpfulAddAnswer = (props) => {
  return (
    <span className='float_right small_font'>
      <Helpful
        helpful={props.question.question_helpfulness}
        questionID={props.question.question_id}
      />{' '}
      | <AddAnswer question={props.question} />
    </span>
  );
};

export default HelpfulAddAnswer;
