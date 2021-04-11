import React from "react";
import PropTypes from "prop-types";

import Stars from "../SharedComponents/Stars.jsx";
// import FeaturedReviewLink from './FeaturedReviewLink.jsx';

class FeaturedProduct extends React.Component {
  // selectProductInfo={selectProductInfo} viaOvC
  constructor() {
    super();
    this.state = {};
    // this.ScrollToReviewSection = this.ScrollToReviewSection.bind(this);
  }

  // ScrollToReviewSection() {
  //   document.getElementByClassName('ratings-and-reviews-container').scrollIntoView(true)
  // }

  // // Kyle: I did also create a Stars component that may be of use to you. It's in the SharedComponents folder. All you have to pass it is a rating number as a prop, and it will give you an appropriate amount of filled stars.

  render() {
    // const { selectProductInfo, reviewData } = this.props;
    const { selectProductInfo } = this.props;
    // const rating = reviewData.ratings[1];
    // console.log('FeaturedProduct_render reviewData.ratings[1]:', reviewData.ratings[1]);
    // <FeaturedReviewLink />
    // CATEGORY
    // <h1>Expanded Product Name</h1>
    return (
      <div className="productAreaItem">
        <div className="productReviewLink">
          {/* <strong>[*****]</strong> */}
          <span id="prettyReviewStars">
            <Stars rating={3.75} />
          </span>
          <span id="scrollToReviews">
            <a href="http://localhost:3000/#ratings-and-reviews-container">
              Read all reviews
            </a>
          </span>
          {/* <span id="scrollToReviews" onClick={this.ScrollToReviewSection}>
            Read all reviews
          </span> */}
        </div>
        <div id="productMainTitle">
          {/* <FeaturedReviewLink /> */}
          <h4>{selectProductInfo.category.toUpperCase()}</h4>
          <h1>{selectProductInfo.name}</h1>
        </div>
      </div>
    );
  }
}

FeaturedProduct.propTypes = {
  selectProductInfo: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        feature: PropTypes.string,
        value: PropTypes.string,
        map: PropTypes.node,
      })
    ),
  }).isRequired,
  reviewData: PropTypes.shape({
    product_id: PropTypes.string,
    ratings: PropTypes.shape({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string,
    }),
    recommended: PropTypes.shape({
      false: PropTypes.string,
      true: PropTypes.string,
    }),
    characteristics: PropTypes.shape({
      Comfort: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
      Fit: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
      Length: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
      Quality: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
      Size: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
      Width: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default FeaturedProduct;
