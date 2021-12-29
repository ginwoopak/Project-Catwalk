import React, { useState } from "react";
import Ratings from "./Ratings.jsx";
import Reviews from "./Reviews.jsx";

function App() {
  return (
    <div>
      Yahtzee!
      <Ratings />
      <Reviews />
    </div>
  );
}

export default App;
