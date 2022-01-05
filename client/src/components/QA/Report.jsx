import React, { useState } from 'react';

const Report = () => {
  const [reported, setReported] = useState(false);

  return (
    <span
      onClick={() => {
        setReported(true);
      }}
    >
      <u>{reported ? 'Reported' : 'Report'}</u>
    </span>
  );
};

export default Report;
