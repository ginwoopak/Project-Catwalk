import React, {useState} from 'react';

const QuestionQA = () => {

  const [question, setQuestion] = useState('Will this treat my Psoriasis?');

  return (
    <div>
      Q: {`${question}`}
    </div>
  );
};

export default QuestionQA;