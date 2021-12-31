import React from "react";

function Review(props) {
  console.log("hello from an individual review", props.list[0].rating);
  return (
    <div>
      <div>{props.list[0].rating}</div>
      <div>Date of Review</div>
      <div>Review Summary</div>
      <div>Review Body</div>
      <div>Recommended</div>
      <div>Reviewer Name</div>
      <div>Response to Review</div>
      <div>Rating Helpfulness</div>
    </div>
  );
}

export default Review;
