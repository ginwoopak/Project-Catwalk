import React from 'react';

const AddQuestion = ( { setQuestionModalOpen } ) => {

  return (
    <button className='button2 addQuestionSpace' onClick={() => { setQuestionModalOpen(true); }}>
      Add Question
    </button>
  );
};

export default AddQuestion;