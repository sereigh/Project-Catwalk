import React from 'react';
import PropTypes from 'prop-types';

import QuestionsList from './QuestionsList.jsx';
import UserInput from './UserInput.jsx';
import Modal from './Modal.jsx';

class QAview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsView: false,
      answersView: false,
    };
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(type, id, input) {
    const { postInput } = this.props
    // remove after answer modal
    console.log('handle input triggered', type, id, input)
    postInput(type, id, 'add', input)
  }

  render() {
    const { questions, postFeedback, productName, productId } = this.props
    const { questionsView, answersView } = this.state
    const questionText = (questionsView ? 'COLLAPSE QUESTIONS' : 'MORE ANSWERED QUESTIONS')

    const toggleAccordian = (e) => {
      if (e.target.name === 'answers') {
        console.log('toggled answer view', e.target.name)
        this.setState(() => {
          return { answersView: true }
        })
      }
      this.setState(() =>
      { return { questionsView: !questionsView }
    })
    }

    return (
      <>
        {questions && (
        <QuestionsList
          questions={questions}
          questionsView={questionsView}
          answersView={answersView}
          toggleAccordian={toggleAccordian}
          postFeedback={postFeedback}
        />
)}
        <>
          <UserInput text={questionText} name="questions" handler={toggleAccordian} />
          <span className="UserInput">
            <Modal
              handleInput={this.handleInput}
              productName={productName}
              id={productId}
              buttonText="Add A Question +"
              type="questions"
            />
          </span>
        </>
      </>
    );
  }
};

QAview.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  postFeedback: PropTypes.func.isRequired,
  postInput: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
}

QAview.showDefault = {
  questionsView: false,
  answersView: false,
  modalView: false,
}

export default QAview;
