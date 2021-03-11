import React from 'react';
// import Stars from '../SharedComponents/Stars.jsx';

// Kyle: I did also create a Stars component that may be of use to you. It's in the SharedComponents folder. All you have to pass it is a rating number as a prop, and it will give you an appropriate amount of filled stars.

// function ScrollToReviewSection() {
//   document.getElementByClassName('ratings-and-reviews-container').scrollIntoView(true)
// }

function FeaturedReviewLink() {
// const FeaturedReviewLink = () => {
// error: Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`  arrow-body-style
  return (
    <div id="productAreaStars">
      <strong>[*****]</strong>
      <span> Read all reviews</span>
    </div>
    // <div id="productAreaStars">
    //   <strong>[*****]</strong>
    //   <span onClick={this.ScrollToReviewSection}>Read all reviews</span>
    // </div>
  );
}

export default FeaturedReviewLink;