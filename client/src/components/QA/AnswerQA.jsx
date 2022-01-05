import React, { useContext } from 'react';
import UserHelpReportQA from './UserHelpReportQA.jsx';
import { QuestionContext } from './ListQA.jsx';


const AnswerQA = (props) => {

  // const { questionData } = useContext(QuestionContext);

  // console.log(questionData);

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
