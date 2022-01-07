import React, { useState } from 'react';

const AddAnswer = ( { setAnswerModalOpen } ) => {
  const [addAnswer, setAddAnswer] = useState(null);

  return (
    <span
      onClick={() => {
        setAddAnswer(alert('ADD ANSWER'));
      }}
    >
      <u>Add Answer</u>
    </span>
  );

  // return (
  //   <span
  //     onClick={() => {
  //       setAnswerModalOpen(true);
  //     }}
  //   >
  //     <u>Add Answer</u>
  //   </span>
  // );
};

export default AddAnswer;
