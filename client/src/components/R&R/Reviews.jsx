<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
=======
import React, { createContext, useContext, useEffect, useState } from 'react';
>>>>>>> bbfd314d9dc19bf452529dedf8d8ac566d1f35fb
import { AppContext } from '../app.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config/config.js';
import Review from './Review.jsx';
<<<<<<< HEAD

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
=======
import RatingBreakdown from './RatingBreakdown.jsx';

export const ReviewContext = createContext(null);

const Reviews = function () {
  const { currentItem } = useContext(AppContext);
  const [reviews, setReviews] = useState([]);
  const [reviewBreak, setReviewBreak] = useState({ ratings: '' });
>>>>>>> bbfd314d9dc19bf452529dedf8d8ac566d1f35fb

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
          });
      });
  }, [currentItem]);

  // let display = [];
  // reviews.forEach((revObj) => {
  //   display.push(<Review key={revObj.review_id} rev={revObj} />);
  // });

  return (
    <ReviewContext.Provider value={{ reviews, reviewBreak }}>
      <div>
        <RatingBreakdown />
        Reviews Section will go here!
        <div>Sorting</div>
        <div>List of Reviews</div>
        <ul>
          {reviews.map((item) => {
            return <Review key={item.review_id} rev={item} />;
          }) || null}
        </ul>
      </div>
    </ReviewContext.Provider>
  );
};

export default Reviews;
