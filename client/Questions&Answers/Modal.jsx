import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false,
      text: '',
      nickname: '',
      email: '',
      question: false,
      answer: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  // const buttonText, modaelView, handleQuestionAdd, toggleModal = props;
  toggleModal() {
    const { modalView } = this.state
    console.log('toggle modal triggered')
    if (event.target.name === 'question') {
      this.setState({ question: true })
    }
    if (event.target.name === 'answer') {
      this.setState({ answer: true })
    }
    this.setState(() => {return { modalView: !modalView }})
  }

  submitForm() {
    // set state to false for both q and a
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
          <h3>Ask Your Question</h3>
          About The Product
          {' '}
          {productName}
          <div>
            <div>
              <form>
              <input type="text"
              name="nickname"
              placeholder="Example: jackson11!"
              >
              </input>
              For privacy reasons, do not use your full name or email address.
              <input
              type="text"
              name="email"
              placeholder="Example: someone@gmail.com"
              >
              </input>
              For authentication reasons you will not be e-mailed.
              <input
              type="text-area"
              name="text"
              placeholder=type
              >
              </input>
              <button type="submit" onSubmit={handleQuestionAdd()}>Submit</button>
              </form>
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
