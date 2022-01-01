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
    product_id: '40344',
    ratings: {
      1: '15',
      2: '13',
      3: '43',
      4: '54',
      5: '138',
    },
    recommended: {
      false: '76',
      true: '187',
    },
    characteristics: {
      Fit: {
        id: 135219,
        value: '2.6354166666666667',
      },
      Length: {
        id: 135220,
        value: '2.6458333333333333',
      },
      Comfort: {
        id: 135221,
        value: '2.9473684210526316',
      },
      Quality: {
        id: 135222,
        value: '3.1538461538461538',
      },
    },
  });
  const [average, setAverage] = useState(5);

  //helper function
  const getAverage = () => {
    var avgArray = Object.values(reviewBreak.ratings);
    var totalNumOfValues = 0;
    var sumOfNumbers = 0;
    var bigOne = 0;

    avgArray.forEach((element, index) => {
      totalNumOfValues = totalNumOfValues + Number(element);
      sumOfNumbers = (index + 1) * Number(element);
      bigOne = bigOne + sumOfNumbers;
    });
    console.log(bigOne, totalNumOfValues);

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
            console.log('hello', response.data);
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
