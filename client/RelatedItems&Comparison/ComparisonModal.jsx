import React from 'react';
import PropTypes from 'prop-types';

const ComparisonModal = ({name, window, toggleModalWindow}) => (
  <div id="myModal" className="modal" style={{display: window}}>
    <div className="modal-content">
      <button type="button" onClick={toggleModalWindow}>X</button>
      <div className="modal-header">
        <p>Comparing</p>
        <p>
          <span className="current-product-name">{name}</span>
          <span className="related-product-name">Product name2</span>
        </p>
      </div>
      <div className="modal-body">
        <p>Some text in the Modal..</p>
      </div>
    </div>
  </div>
);

ComparisonModal.propTypes = {
  name: PropTypes.string.isRequired,
  // features: PropTypes.arrayOf(PropTypes.shape({
  //   feature: PropTypes.string,
  //   value: PropTypes.string
  // })).isRequired,
  window: PropTypes.string.isRequired,
  toggleModalWindow: PropTypes.func.isRequired,
  selectProductInfo: PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }).isRequired
}


export default ComparisonModal;
