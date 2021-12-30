import React, {useState} from 'react';

const QuestionQA = () => {

  // eslint-disable-next-line no-unused-vars
  const [question, setQuestion] = useState('Will this treat my Psoriasis?');

  return (
    <div>
      Q: {`${question}`}
    </div>
  );
};

export default QuestionQA;