import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../app.jsx';

const Helpful = (props) => {
  const [count, setCount] = useState(props.helpful);
  const [clicked, setClicked] = useState(false);

  const { currentItem } = useContext(AppContext);

  const putAPI = async (params = '', callback) => {
    try {
      callback(await axios.put(params, { id: currentItem.id }));
    } catch (error) {
      console.log(error);
    }
  };

  let handleHelp = () => {
    if (!clicked) {
      putAPI(`qa/questions/${props.questionID}/helpful`, (response) => {
        let index = 0;

        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].question_id === props.questionID) {
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
