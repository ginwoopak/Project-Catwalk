import React, { useContext } from 'react';
import { QuestionContext } from './QuestionContainer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

  const { handleChange } = useContext(QuestionContext);

  return (
    <form>
      <input
        type='text'
        size='45'
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onChange={(e) => handleChange(e)}
      />
      <FontAwesomeIcon icon={faSearch} />
    </form>
  );
};

export default SearchBar;
