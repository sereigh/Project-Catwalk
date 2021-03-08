import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard.jsx';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {selectProductInfo, selectAnotherProduct} = this.props;

    return (
      <div className="OutfitList">
        <div className="carousel">
          <div>
            AdditonCard
          </div>
          <ProductCard productId={17762} selectProductInfo={selectProductInfo} selectAnotherProduct={selectAnotherProduct} />
        </div>
      </div>
    )
  }

}

OutfitList.propTypes = {
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }).isRequired,
  selectAnotherProduct: PropTypes.func.isRequired
}

export default OutfitList;
