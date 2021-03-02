import React from 'react';

import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewsList = ({reviews}) => (
  <div>
    {reviews.map(review => <ReviewListEntry key={review.review_id} review={review} />)}
  </div>
);


export default ReviewsList;