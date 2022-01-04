import React, { useState, useContext, useEffect } from 'react';
import QuestionQA from './QuestionQA.jsx';
import AnswerQA from './AnswerQA.jsx';
import HelpAddAnswerQA from './HelpAddAnswerQA.jsx';
import { QuestionContext } from './ListQA.jsx';

const IndividualQA = (props) => {
  const { questionData } = useContext(QuestionContext);

  console.log('questionData:', questionData);

  const [isActive, setIsActive] = useState(false);

  let answers = Object.values(props.question.answers);

  let answerList = answers.map((answer) => {
    return <AnswerQA answer={answer} key={`${answer.id}`} />;
  });

  return (
    <React.Fragment>
      <div className='accordion-item'>
        <div
          className='accordion-title'
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <QuestionQA question={props.question.question_body} />
          <HelpAddAnswerQA />
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && (
          <div>
            <div className='accordion-content'>{answerList}</div>
          </div>
        )}

      </div>
      <hr></hr>
    </React.Fragment>
  );
};

export default IndividualQA;
