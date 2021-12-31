import React from 'react';

function Review(props) {
  return (
    <li>
      <div>{props.rev.rating}</div>
      <div>{props.rev.date}</div>
      <div>{props.rev.summary}</div>
      <div>{props.rev.body}</div>
      <div>Recommended? True/False{props.rev.recommend}</div>
      <div>{props.rev.reviewer_name}</div>
      <div>Response Pending?{props.rev.response}</div>
      <div>Helpful?{props.rev.helpfulness}</div>
    </li>
  );
}

export default Review;
