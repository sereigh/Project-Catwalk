import React from 'react';

const ComparisonModal = ({window, toggleModalWindow}) => (
  <div id="myModal" className="modal" style={{display: window}}>
    <div className="modal-content">
      <button onClick={toggleModalWindow}>X</button>
      <p>Some text in the Modal..</p>
    </div>
  </div>
);

export default ComparisonModal;