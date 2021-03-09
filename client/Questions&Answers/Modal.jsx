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
      photos: [],
      question: false,
      answer: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(e) {
    this.setState({
       [e.target.name]: e.target.value
      })
  }

  submitForm(e) {
    const {name, body, email, photos, type, answer } = this.state
    const { handleInput, id } = this.props
    const input = ( answer ? {name, body, email, photos} : {name, body, email, id})
    e.preventDefault()
    // remove after answers modal
    console.log(input)
    handleInput(type, id, input)
    this.setState({
      body: '',
      name: '',
      email: '',
    })
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
    const { modalView, question } = this.state
    const { productName, buttonText, qText } = this.props
    const areaText = (question ? 'Question: ' : 'Answer: ')
    const titleText = (question ? 'Ask Your Question' : 'Submit Your Answer')
    const subtitleText = (question? 'About the Product: ' : `${productName}: ${qText}`)

    return (
      <>
        <div
          className="open-modal"
          onClick={() => {this.toggleModal()}}
          role="button"
          tabIndex={0}
          onKeyPress={() => {this.toggleModal()}}
        >
          {buttonText}
        </div>
        {modalView && (
        <div className="qa-modal-view">
          <h3>{titleText}</h3>
          {subtitleText}
          {' '}
          {question && productName}
          {' '}
          <div className="modal-form">
            <form
              onSubmit={(e) => {this.submitForm(e)}}
            >
              <span>
                <label htmlFor="nickame">
                  Nickname:
                  <input
                    type="text"
                    name="name"
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
                  type="email"
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
                  name="body"
                  onChange={(e) => {this.handleFormChange(e)}}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
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
  buttonText: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  qText: PropTypes.string.isRequired,
}
