import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({buttonText, modalView, handleQuestionAdd, toggleModal}) => (
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
    {modalView && (
      <div>
        <div>
          <div>
            <h1>HELLO</h1>
            <button type="submit" onSubmit={handleQuestionAdd()}>Submit</button>
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
  modalView: PropTypes.bool.isRequired,
  handleQuestionAdd: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
}
