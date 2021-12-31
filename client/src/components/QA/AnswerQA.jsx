import React, {useState} from 'react';

const AnswerQA = () => {

  const [answer, setAnswer] = useState('No, this is a hoodie to keep you warm. Will definitely not treat your Psoriasis.');

  return (
    <div className='align_left'>
      <b>A: </b>
      <span className='small_font'>
        {`${answer}`}
      </span>
    </div>
  );
};

export default AnswerQA;