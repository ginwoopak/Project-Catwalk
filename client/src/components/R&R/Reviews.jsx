import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config/config.js';
import Review from './Review.jsx';

const Reviews = function () {
  const { currentItem } = useContext(AppContext);
  const [reviews, setReviews] = useState([
    {
      review_id: 841407,
      rating: 5,
      summary: 'Best Ever! ',
      recommend: true,
      response: null,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
      date: '2021-09-23T00:00:00.000Z',
      reviewer_name: 'chester',
      helpfulness: 13,
      photos: [
        {
          id: 1595448,
          url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632370529/lixlgtng4vu3kyp4p8ah.png',
        },
      ],
    },
  ]);

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${currentItem.id}`,
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setReviews(response.data.results);
      });
  }, [currentItem]);

  let display = [];
  reviews.forEach((revObj) => {
    display.push(<Review key={revObj.review_id} rev={revObj} />);
  });

  return (
    <div>
      Reviews Section will go here!
      <div>Sorting</div>
      <div>List of Reviews</div>
      <ul>{display}</ul>
    </div>
  );
};

export default Reviews;
