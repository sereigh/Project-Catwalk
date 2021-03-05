import React from 'react';
import PropTypes from 'prop-types';

class FeaturedProduct extends React.Component {
  // selectProductInfo={selectProductInfo} viaOvC
  // selectProductCategory={selectProductInfo.category} viaOvC
  // selectProductName={selectProductInfo.name} viaOvC
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { selectProductInfo } = this.props;
    // CATEGORY
    // <h1>Expanded Product Name</h1>
    return (
      <div id="productAreaItem">
        {/* <h4>{selectProductInfo.category.toUpperCase()}</h4> */}
        <h4>{selectProductInfo.category}</h4>
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
    "updated_at": PropTypes.string
  }).isRequired
}

export default FeaturedProduct;
