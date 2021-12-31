import React, {useState} from 'react';

const AddAnswerQA = () => {

  const [addAnswer, setAddAnswer] = useState(null)

  return (
    <span onClick={() => {setAddAnswer(alert('ADD ANSWER'))}}>
      <u>Add Answer</u>
    </span>
  );
};

export default AddAnswerQA;