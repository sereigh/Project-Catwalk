import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

import RelatedProductList from './RelatedProductList.jsx';
import OutfitList from './OutfitList.jsx';

const RelatedListContainer = ({selectProductInfo, selectProductId, selectAnotherProduct, addNewOutfit, deleteOutfit, userOutfits}) => (
  <div className="list-container">
    **RelatedProductList**
    <RelatedProductList selectProductInfo={selectProductInfo} selectProductId={selectProductId} selectAnotherProduct={selectAnotherProduct} />
    **OutfitList**
    <OutfitList selectProductId={selectProductId} selectAnotherProduct={selectAnotherProduct} addNewOutfit={addNewOutfit} deleteOutfit={deleteOutfit} userOutfits={userOutfits} />
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
  selectAnotherProduct: PropTypes.func.isRequired,
  addNewOutfit: PropTypes.func.isRequired,
  deleteOutfit: PropTypes.func.isRequired,
  userOutfits: PropTypes.arrayOf(PropTypes.number).isRequired
};


export default RelatedListContainer;
