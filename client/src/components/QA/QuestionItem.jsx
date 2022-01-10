import React, { useState } from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import HelpfulAddAnswer from './HelpfulAddAnswer.jsx';

const QuestionItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [limit, setLimit] = useState(2);

  let answers = Object.values(props.question.answers);

  let answerList = answers.slice(0, limit).map((answer) => {
    return <Answer answer={answer} key={answer.id} />;
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
          <Question question={props.question.question_body} />
          <div>{isActive ? '-' : '+'}</div>
        </div>
        <div>
          <HelpfulAddAnswer question={props.question} />
        </div>
        <div className='accordion-content'>
          {isActive && (
            <div>
              <div>{answerList}</div>
              <div>
                {answers.length > 2 && (
                  <div
                    className='darktitle centerLoadAnswers'
                    onClick={() => {
                      setLimit(limit + 2);
                    }}
                  >
                    <u>Load More Answers</u>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <hr></hr>
    </React.Fragment>
  );
};

export default QuestionItem;
