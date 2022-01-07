import React, { useState, useContext } from 'react';
import { QuestionContext } from './QuestionContainer.jsx';

const AddAnswer = () => {
  // const [addAnswer, setAddAnswer] = useState(null);

  // return (
  //   <span
  //     onClick={() => {
  //       setAddAnswer(alert('ADD ANSWER'));
  //     }}
  //   >
  //     <u>Add Answer</u>
  //   </span>
  // );

  const { setAnswerModalOpen } = useContext(QuestionContext);

  return (
    <span
      onClick={() => {
        setAnswerModalOpen(true);
      }}
    >
      <u>Add Answer</u>
    </span>
  );
};

export default AddAnswer;
