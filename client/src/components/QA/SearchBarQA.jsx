import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const QASearchBar = () => {
  return (
    <form>
      <input type="text" size="45" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
      <FontAwesomeIcon icon={faSearch}/>
    </form>
  );
};

export default QASearchBar;