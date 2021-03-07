import React from 'react';
import PropTypes from 'prop-types';

const ComparisonModal = ({product1, product2, commonFeatures, window, toggleModalWindow}) => (
  <div className="comparison-modal-window" style={{display: window}}>
    <div className="comparison-modal-content">
      <div className="comparison-modal-header">
        <p>Comparing</p>
        <p className="productName-container">
          <span className="current-product">{product1}</span>
          <span className="related-product">{product2}</span>
        </p>
      </div>
      <br />
      <div className="comparison-modal-body">
        {Object.keys(commonFeatures).map((content, index) => (
          <p key={`key${index+1}`} className="features-container">
            <span className="current-product">{commonFeatures[content].value1 || '    '}</span>
            <span className="characteristic">{content}</span>
            <span className="related-product">{commonFeatures[content].value2 ||  '    '}</span>
          </p>
        ))}
      </div>
    </div>
    <div role="button" tabIndex="0" className="overlay" onClick={toggleModalWindow} onKeyPress={toggleModalWindow} />
  </div>
);

ComparisonModal.propTypes = {
  product1: PropTypes.string.isRequired,
  product2: PropTypes.string.isRequired,
  commonFeatures: PropTypes.objectOf(PropTypes.shape({
    value1: PropTypes.string,
    value2: PropTypes.string
  })).isRequired,
  window: PropTypes.string.isRequired,
  toggleModalWindow: PropTypes.func.isRequired
}


export default ComparisonModal;
