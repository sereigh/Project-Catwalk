import React from 'react';
import PropTypes from 'prop-types';

// f import CartFormSize from './CartFormSize.jsx';
// f import CartFormQuantity from './CartFormQuantity.jsx';

class CartInserter extends React.Component {
  // selectStyleOptions={selectStyleOptions} viaOvC
  // selectStyleIndex={selectStyleIndex} viaOvC
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="" />


    );
  }

}

CartInserter.propTypes = {
  selectStyleOptions: PropTypes.arrayOf(PropTypes.shape({
    "style_id": PropTypes.number,
    "name": PropTypes.string,
    "original_price": PropTypes.string,
    "sale_price": PropTypes.string,
    "default?": PropTypes.bool,
    "photos": PropTypes.arrayOf(PropTypes.shape({
      "thumbnail_url": PropTypes.string,
      "url": PropTypes.string
    })),
    "skus": PropTypes.objectOf(PropTypes.shape({
      // "547962": PropTypes.objectOf(PropTypes.shape({
      "quantity": PropTypes.number,
      "size": PropTypes.string
      // }))
    }))
  })).isRequired,
  selectStyleIndex: PropTypes.number.isRequired,
}

export default CartInserter;
