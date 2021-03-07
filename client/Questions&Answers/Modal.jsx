import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({buttonText, viewModal, handleAdd, toggleModal}) => (
  <>
    <div
      className="open-modal"
      onClick={() => {toggleModal()}}
      role="button"
      tabIndex={0}
      onKeyPress={() => {toggleModal()}}
    >
      {buttonText}
    </div>
    {viewModal && (
      <div>
        <div>
          <div>
            <h1>HELLO</h1>
            <div
              className="close-modal"
              onClick={() => {toggleModal()}}
              role="button"
              tabIndex={0}
              onKeyPress={() => {toggleModal()}}
            >
              CLOSE
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

export default Modal;

Modal.propTypes = {
  buttonText: PropTypes.string.isRequired,
  viewModal: PropTypes.bool.isRequired,
  handleAdd: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}
