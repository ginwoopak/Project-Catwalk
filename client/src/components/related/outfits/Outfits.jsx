import React, { useState, useContext, useEffect, useMemo } from "react";
import sampleData from "../sampleData.js";

const Outfits = () => {
  const [relatedProducts, setRelatedProducts] = useState(sampleData);

  return (
    <>
      <h1>Outfits</h1>
    </>
  );
};

export default Outfits;
