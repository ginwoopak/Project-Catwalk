import React from 'react';
import QuestionQA from './QuestionQA.jsx';
import AnswerQA from './AnswerQA.jsx';
import HelpAddAnswerQA from './HelpAddAnswerQA.jsx';
import UserHelpReportQA from './UserHelpReportQA.jsx';

const IndividualQA = (props) => {
  let answers = Object.values(props.question.answers);

  let answerList = answers.map((answer) => {
    return <AnswerQA answer={answer} key={`${answer.id}`} />;
  });

  return (
    <div className='individual_container border'>
      {/* {console.log("from individual QA", question)} */}
      <div>
        <QuestionQA question={props.question.question_body} />
        <HelpAddAnswerQA />
      </div>
      <div className='float_left'>{answerList}</div>
      <div>
        <UserHelpReportQA />
      </div>
    </div>
  );
};

export default IndividualQA;
