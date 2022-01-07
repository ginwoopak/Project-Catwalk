import React from 'react';

const AddQuestion = ( { setQuestionModalOpen } ) => {

  return (
    <button onClick={() => { setQuestionModalOpen(true); }}>
      Add Question
    </button>
  );
};

export default AddQuestion;