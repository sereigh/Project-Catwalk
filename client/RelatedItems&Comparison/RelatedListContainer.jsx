import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

import RelatedProductList from './RelatedProductList.jsx';
import OutfitList from './OutfitList.jsx';

const RelatedListContainer = ({selectProductInfo, selectProductId, selectAnotherProduct}) => (
  <div className="list-container">
    **RelatedProductList**
    <RelatedProductList selectProductInfo={selectProductInfo} selectProductId={selectProductId} selectAnotherProduct={selectAnotherProduct} />
    **OutfitList**
    <OutfitList />
  </div>
);

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
