import React from 'react';
import UserHelpReportQA from './UserHelpReportQA.jsx';

const AnswerQA = (props) => {
  return (
    <div>
      <div className='align_left'>
        <b>A: </b>
        <span className='small_font'>{`${props.answer.body}`}</span>
        <div>
          <UserHelpReportQA />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default AnswerQA;
