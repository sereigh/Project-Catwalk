import React from "react";
import PropTypes from "prop-types";

const StylePrice = (props) => {
  // selectStyleOptions={selectStyleOptions} via StyleCategory
  // selectStyleIndex={selectStyleIndex} via StyleCategory
  const { selectStyleOptions, selectStyleIndex } = props;
  let priceReadout = "";
  if (selectStyleOptions[selectStyleIndex].sale_price !== null) {
    priceReadout = (
      <div>
        <span id="priceSale">
          ${selectStyleOptions[selectStyleIndex].sale_price}
        </span>
        <span id="priceOriginal">
          <strike>
            ${selectStyleOptions[selectStyleIndex].original_price}
          </strike>
        </span>
      </div>
    );
  } else {
    priceReadout = (
      <div>
        <span id="priceOriginal">
          ${selectStyleOptions[selectStyleIndex].original_price}
        </span>
      </div>
    );
  }
  return <div id="stylePrice">{priceReadout}</div>;
};

StylePrice.propTypes = {
  selectStyleOptions: PropTypes.arrayOf(
    PropTypes.shape({
      style_id: PropTypes.number,
      name: PropTypes.string,
      original_price: PropTypes.string,
      sale_price: PropTypes.string,
      "default?": PropTypes.bool,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          thumbnail_url: PropTypes.string,
          url: PropTypes.string,
        })
      ),
      skus: PropTypes.objectOf(
        PropTypes.shape({
          // : PropTypes.objectOf(PropTypes.shape({
          quantity: PropTypes.number,
          size: PropTypes.string,
          // }))
        })
      ),
    })
  ).isRequired,
  selectStyleIndex: PropTypes.number.isRequired,
};

export default StylePrice;
