import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false,
      body: '',
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


  handleFormChange(e) {
    this.setState({
       [e.target.name]: e.target.value
      })
  }

  submitForm() {
    // set state to false for both q and a
  }

  toggleModal() {
    const { modalView, question, answer } = this.state
    const { type } = this.props
    console.log('toggle modal triggered')
    if (type === 'question') {
      this.setState({
        question: !question
      })
    }
    if (type === 'answer') {
      this.setState({
        answer: !answer
      })
    }
    this.setState(() => {return { modalView: !modalView }})
  }

  render() {
    const { modalView } = this.state
    const { productName, handleInput } = this.props
    //id
    const areaText = 'yourQuestion';
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
                    onChange={(e) => {this.handleFormChange(e)}}
                  />
                </label>
                <br />
                For privacy reasons, do not use your full name or email address.
              </span>
              <br />
              <label htmlFor="email">
                E-mail:
                <input
                  type="text"
                  name="email"
                  placeholder="Example: someone@gmail.com"
                  onChange={(e) => {this.handleFormChange(e)}}
                />
              </label>
              <br />
              For authentication reasons you will not be e-mailed.
              <br />
              <label htmlFor={areaText}>
                {areaText}
                <input
                  type="textarea"
                  name="text"
                  onChange={(e) => {this.handleFormChange(e)}}
                />
              </label>
              <br />
              <button type="submit" onSubmit={() => console.log('nope')}>Submit</button>
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
            CLOSE
          </div>
        </div>
        )}
      </>
    );
  }
}

export default Modal;

Modal.propTypes = {
  handleInput: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
}
