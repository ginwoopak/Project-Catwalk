import React from 'react';
import UserHelpfulReport from './UserHelpfulReport.jsx';

const Answer = (props) => {
  return (
    <div>
      <div className='align_left'>
        <b className='darktitle'>A: </b>
        <span className='darktitle'>{`${props.answer.body}`}</span>
        <div>
          <UserHelpfulReport answer={props.answer}/>
        </div>
      </div>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default Answer;
