import React from 'react';
import PropTypes from 'prop-types';

const ComparisonModal = ({features, window, toggleModalWindow}) => (
  <div id="myModal" className="modal" style={{display: window}}>
    <div className="modal-content">
      <button type="button" onClick={toggleModalWindow}>X</button>
      <div className="modal-header">
        <p>Comparing</p>
        <p>
          <span>Product name1</span>
          <span>Product name2</span>
        </p>
      </div>
      <div className="modal-body">
        <p>Some text in the Modal..</p>
      </div>
    </div>
  </div>
);

ComparisonModal.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    feature: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  window: PropTypes.string.isRequired,
  toggleModalWindow: PropTypes.func.isRequired
}


export default ComparisonModal;
