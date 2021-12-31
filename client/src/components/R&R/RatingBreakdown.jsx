import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config/config.js';
import HalfRating from './Stars.jsx';

const RatingBreakdown = function () {
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
  const [reviewBreak, setReviewBreak] = useState({
    product_id: '40345',
    ratings: {
      1: '1',
      2: '2',
      3: '2',
      4: '2',
      5: '12',
    },
    recommended: {
      false: '4',
      true: '15',
    },
    characteristics: {
      Quality: {
        id: 135223,
        value: '3.7000000000000000',
      },
    },
  });

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

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${currentItem.id}`,
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setReviewBreak(response.data);
      });
  }, [currentItem]);

  var avgArray = Object.values(reviewBreak.ratings);
  var totalNumOfValues = 0;
  var sumOfNumbers = 0;
  var bigOne = 0;

  avgArray.forEach((element, index) => {
    totalNumOfValues = totalNumOfValues + Number(element);
    sumOfNumbers = (index + 1) * Number(element);
    bigOne = bigOne + sumOfNumbers;
  });

  var average = bigOne / totalNumOfValues;

  return (
    <div>
      <div>Ratings will go here</div>
      <div>{average}</div>
      <HalfRating num={average} />
      <div>Percentages</div>
      <div>Graphs</div>
      <div>Size/Comfort</div>
    </div>
  );
};

export default RatingBreakdown;
