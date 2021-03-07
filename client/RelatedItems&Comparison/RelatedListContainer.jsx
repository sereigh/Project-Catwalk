import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import RelatedProductList from './RelatedProductList.jsx';

class RelatedListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {selectProductInfo, selectProductId, selectAnotherProduct} = this.props;
    return (
      <div>
        <ul>
          <div>
            **RelatedProductList**
            <RelatedProductList selectProductInfo={selectProductInfo} selectProductId={selectProductId} selectAnotherProduct={selectAnotherProduct} />
          </div>
          <div>**OutfitList**</div>
        </ul>
      </div>
    );
  }
};

RelatedListContainer.propTypes = {
  selectProductId: PropTypes.number.isRequired,
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }).isRequired,
  selectAnotherProduct: PropTypes.func.isRequired
};


export default RelatedListContainer;
