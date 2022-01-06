import React, { useState, useContext} from 'react';
import axios from 'axios';
import { AppContext } from '../app.jsx';

const url = 'http://localhost:3000/';

const Helpful = (props) => {
  const [count, setCount] = useState(props.helpful);
  const [clicked, setClicked] = useState(false);
  const [questionID, setID] = useState(props.questionID);

  const { currentItem, callAPI } = useContext(AppContext);

  const postAPI = async (params = '', callback) => {
    try {
      callback(await axios.put(url + params, {id: currentItem.id}));
    } catch (error) {
      console.log(error);
    }
  };

  let handleHelp = () => {
    if (!clicked) {
      postAPI(`qa/questions/${questionID}/helpful`, (response) => {

        let index = 0;

        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].question_id === questionID) {
            index = i;
          }
        }

        setCount(response.data[index].question_helpfulness);

      });
      setClicked(true);
    }
  };

  return (
    <span
      onClick={() => {
        handleHelp();
      }}
    >
      Helpful? <u>Yes</u> ({`${count}`})
    </span>
  );
};

export default Helpful;
