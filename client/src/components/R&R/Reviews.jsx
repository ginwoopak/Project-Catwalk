import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config/config.js';
import Review from './Review.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

export const ReviewContext = createContext(null);

const Reviews = function () {
  const { currentItem } = useContext(AppContext);
  const [reviews, setReviews] = useState([]);
  const [reviewBreak, setReviewBreak] = useState({
    ratings: {
      5: '5',
    },
  });
  const [average, setAverage] = useState(0);

  //helper function
  const getAverage = () => {
    var avgArray = Object.values(reviewBreak.ratings);
    var indArray = Object.keys(reviewBreak.ratings);
    var totalNumOfValues = 0;
    var sumOfNumbers = 0;
    var bigOne = 0;

    avgArray.forEach((element, index) => {
      totalNumOfValues = totalNumOfValues + Number(element);
      sumOfNumbers = indArray[index] * Number(element);
      bigOne = bigOne + sumOfNumbers;
    });

    return bigOne / totalNumOfValues;
  };

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
      })
      .then(() => {
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
          })
          .then(() => {
            setAverage(getAverage());
          });
      });
  }, [currentItem]);

  return (
    <ReviewContext.Provider
      value={{ reviews, reviewBreak, average, setAverage }}
    >
      <div>
        Review Breakdown is here. Should be left corner.
        <RatingBreakdown />
        Reviews Section will go here!
        <div>Sorting</div>
        <div>List of Reviews</div>
        <ul>
          {reviews.map((item) => {
            return <Review key={item.review_id} rev={item} />;
          })}
        </ul>
      </div>
    </ReviewContext.Provider>
  );
};

export default Reviews;
