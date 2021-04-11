import React from "react";
import PropTypes from "prop-types";

const StyleCategory = (props) => {
  // selectStyleOptions={selectStyleOptions} via StyleCategory
  // selectStyleIndex={selectStyleIndex} via StyleCategory
  const { selectStyleOptions, selectStyleIndex } = props;
  return (
    <div id="styleCategory">
      <p>
        <strong>{"STYLE > "}</strong>
        {selectStyleOptions[selectStyleIndex].name.toUpperCase()}
      </p>
    </div>
  );
};

StyleCategory.propTypes = {
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
          // "547962": PropTypes.objectOf(PropTypes.shape({
          quantity: PropTypes.number,
          size: PropTypes.string,
          // }))
        })
      ),
    })
  ).isRequired,
  selectStyleIndex: PropTypes.number.isRequired,
};

export default StyleCategory;
