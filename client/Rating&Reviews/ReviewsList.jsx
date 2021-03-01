import React from 'react';

import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewsList = ({reviews}) => {
  return (
    <div>
      {reviews.map(review => <ReviewListEntry review={review} />)}
    </div>
  );
}

export default ReviewsList;