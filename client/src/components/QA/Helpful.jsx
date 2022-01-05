import React, { useState } from 'react';

const Helpful = (props) => {
  const [count, setCount] = useState(props.helpful);
  const [clicked, setClicked] = useState(false);

  let handleHelp = () => {
    if (!clicked) {
      setCount(count + 1);
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
