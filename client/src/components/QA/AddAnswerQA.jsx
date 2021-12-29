import React, {useState} from 'react';

const AddAnswerQA = () => {

  const [addAnswer, setAddAnswer] = useState(null)

  return (
    <div onClick={() => {setAddAnswer(alert('ADD ANSWER'))}}>
      <u>Add Answer</u>
    </div>
  );
};

export default AddAnswerQA;