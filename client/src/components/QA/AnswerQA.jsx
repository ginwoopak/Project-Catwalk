import React, {useState} from 'react';

const AnswerQA = () => {

  const [answer, setAnswer] = useState('No, this is a hoodie to keep you warm. Will definitely not treat your Psoriasis.');

  return (
    <div>
      A: {`${answer}`}
    </div>
  );
};

export default AnswerQA;