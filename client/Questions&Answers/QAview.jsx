import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

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
    this.handleQuestionAdd = this.handleQuestionAdd.bind(this)
    this.handleAnswerAdd = this.handleAnswerAdd.bind(this)
  }


  handleAnswerAdd(e, input) {
    const { postInput } = this.props
    event.preventDefault()
    postInput('answer', input)
    console.log('handle answer add triggered')
  }

  handleQuestionAdd(e, input) {
    const { postInput } = this.props
    event.preventDefault()
    postInput('question', input)
    console.log('handle question add triggered')
  }

  render() {
    const { questions, postFeedback, productName } = this.props
    const { questionsView, answersView } = this.state
    const questionText = (questionsView ? 'COLLAPSE QUESTIONS' : 'MORE ANSWERED QUESTIONS')

    const toggleAccordian = (e) => {
      if (e.target.name === 'answers') {
        console.log('toggled answer view', e.target.name)
        this.setState(() => { return { answersView: true } })
      }
      this.setState(() => { return { questionsView: !questionsView } })
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
            <Modal handleQuestionAdd={this.handleQuestionAdd} productName={productName} />
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
}

QAview.showDefault = {
  questionsView: false,
  answersView: false,
  modalView: false,
}

export default QAview;
