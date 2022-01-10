import React, { useContext } from 'react';
import { QuestionContext } from './QuestionContainer.jsx';

const SearchBar = () => {

  const { handleChange } = useContext(QuestionContext);

  return (
    <form>
      <input
        className='search'
        type='text'
        size='45'
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default SearchBar;
