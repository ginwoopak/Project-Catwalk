import React, { useContext } from 'react';
import { QuestionContext } from './QuestionContainer.jsx';

const AddAnswer = (props) => {
  const { setAnswerModalOpen, setQuestion } = useContext(QuestionContext);

  return (
    <span
      onClick={() => {
        setAnswerModalOpen(true);
        setQuestion(props.question);
      }}
    >
      <u>Add Answer</u>
    </span>
  );
};

export default AddAnswer;
