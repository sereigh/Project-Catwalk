import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  // const buttonText, modaelView, handleQuestionAdd, toggleModal = props;
  toggleModal() {
    const { modalView } = this.state
    console.log('toggle modal triggered')
    this.setState(() => {return { modalView: !modalView }})
  }

  render() {
    const { modalView } = this.state
    const {handleQuestionAdd, productName } = this.props
    return (
      <>
        <div
          className="open-modal"
          onClick={() => {this.toggleModal()}}
          role="button"
          tabIndex={0}
          onKeyPress={() => {this.toggleModal()}}
        >
          Add A Question +
        </div>
        {modalView && (
        <div className="qa-modal-view">
          <title>Ask Your Question</title>

          About The Product
          <br />
            {productName}
          <div>
            <div>
              <h1>HELLO</h1>
              <button type="submit" onSubmit={handleQuestionAdd()}>Submit</button>
              <div
                className="close-modal"
                onClick={() => {this.toggleModal()}}
                role="button"
                tabIndex={0}
                onKeyPress={() => {this.toggleModal()}}
              >
                CLOSE
              </div>
            </div>
          </div>
        </div>
        )}
      </>
    );
  }
}

export default Modal;

Modal.propTypes = {
  handleQuestionAdd: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,

}
