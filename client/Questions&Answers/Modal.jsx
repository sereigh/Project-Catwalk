import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false,
      text: '',
      name: '',
      email: '',
      question: false,
      answer: false,

    }
    this.toggleModal = this.toggleModal.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  // const buttonText, modaelView, handleQuestionAdd, toggleModal = props;


  handleFormChange() {

  }

  submitForm() {
    event.preventDefault()
    const { modalView, text, name, email, question, answer, id } = this.state

    (question ? handleInputSubmit({ body: text, name: name, email: email, product_id: id }, 'question') : handleInputSubmit({ body: text, name: name, email: email, question_id: id }, 'answer'))
    }


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

  render() {
    const { modalView, text, name, email, question, answer } = this.state
    const {handleQuestionAdd, productName } = this.props
    const areaText = 'Question: ';
    // (question ? 'Question: ' : 'Answer: ')
    return (
      <>
        {/* make a open button component for modal to display differently for q and a */}
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
          About the Product:
          {' '}
          {productName}
          {' '}
          <div className="modal-form">
            <form>
              <span>
                <label htmlFor="nickame">
                  Nickname:
                  <input
                    type="text"
                    name="nickname"
                    placeholder="Example: jackson11!"
                    maxLength="60"
                    required="true"
                    onChange={this.handleFormChange()}
                  />
                </label>
                <br />
                <span className="answersFeedback-left">For privacy reasons, do not use your full name or email address.</span>
              </span>
              <br />
              <label htmlFor="email">
                E-mail:
                <input
                  type="text"
                  name="email"
                  placeholder="Example: someone@gmail.com"
                  maxLength="60"
                  required="true"
                  onChange={this.handleFormChange()}
                />
              </label>
              <br />
              <span className="answersFeedback-left">For authentication reasons you will not be e-mailed.</span>
              <br />
              <label htmlFor={areaText}>
                <textarea
                  name="text"
                  maxLength="1000"
                  rows="5"
                  cols="25"
                  required="true"
                  onChange={this.handleFormChange()}
                />
              </label>
              <br />
              <button type="submit" onSubmit={handleQuestionAdd()}>Submit</button>
              <br />
            </form>
          </div>
          <div
            className="close-modal"
            onClick={() => {this.toggleModal()}}
            role="button"
            tabIndex={0}
            onKeyPress={() => {this.toggleModal()}}
          >
            X
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
