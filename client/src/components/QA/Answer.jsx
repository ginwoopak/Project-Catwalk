import React from 'react';
import UserHelpfulReport from './UserHelpfulReport.jsx';

const Answer = (props) => {
  return (
    <div>
      <div className='align_left'>
        <b>A: </b>
        <span className='small_font'>{`${props.answer.body}`}</span>
        <div>
          <UserHelpfulReport answer={props.answer}/>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Answer;
