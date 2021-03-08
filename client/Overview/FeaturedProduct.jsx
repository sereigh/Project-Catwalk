import React from 'react';
import PropTypes from 'prop-types';

import FeaturedReviewLink from './FeaturedReviewLink.jsx';

class FeaturedProduct extends React.Component {
  // selectProductInfo={selectProductInfo} viaOvC
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { selectProductInfo } = this.props;
    // <FeaturedReviewLink />
    // CATEGORY
    // <h1>Expanded Product Name</h1>
    return (
      <div id="productAreaItem">
        <FeaturedReviewLink />
        <h4>{selectProductInfo.category.toUpperCase()}</h4>
        <h1>{selectProductInfo.name}</h1>
      </div>
    );
  }

}

FeaturedProduct.propTypes = {
    selectProductInfo: PropTypes.shape({
      "id": PropTypes.number,
      "campus": PropTypes.string,
      "name": PropTypes.string,
      "slogan": PropTypes.string,
      "description": PropTypes.string,
      "category": PropTypes.string,
      "default_price": PropTypes.string,
      "created_at": PropTypes.string,
      "updated_at": PropTypes.string,
      "features": PropTypes.arrayOf(PropTypes.shape({
        "feature": PropTypes.string,
        "value": PropTypes.string,
        "map": PropTypes.node
      }))
    }).isRequired
  }

export default FeaturedProduct;
