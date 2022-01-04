import React from 'react';
import UserHelpReportQA from './UserHelpReportQA.jsx';

const AnswerQA = (props) => {

  // console.log(props.answer);

  return (
    <div>
      <div className='align_left'>
        <b>A: </b>
        <span className='small_font'>{`${props.answer.body}`}</span>
        <div>
          <UserHelpReportQA answer={props.answer}/>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default AnswerQA;
