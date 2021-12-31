import React, { useState } from "react";

const HelpfulQA = () => {
  const [count, setCount] = useState(0);

  return (
    <span
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Helpful? <u>Yes</u> ({`${count}`})
    </span>
  );
};

export default HelpfulQA;
