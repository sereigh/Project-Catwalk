import React from 'react';
import PropTypes from 'prop-types';

import QuestionsList from './QuestionsList.jsx';
import Modal from './Modal.jsx';

class QAview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsView: false,
      answersView: false,
      idList: [],
      qIndex: 3,
      aIndex: 1,
    };
    this.handleInput = this.handleInput.bind(this)
    this.canClick = this.canClick.bind(this)
    this.toggleQuestions = this.toggleQuestions.bind(this)
    this.toggleAnswers = this.toggleAnswers.bind(this)
  }

  handleInput(type, id, input) {
    const { postInput } = this.props
    postInput(type, id, 'add', input)
  }

  canClick(type, id, option) {
    const { idList } = this.state
    const {postFeedback } = this.props

      if (idList.includes(id)) {
        return console.error('Invalid action')
      }
      idList.push(id)
        return postFeedback(type, id, option)
  }

  toggleQuestions() {
    const {questions } = this.props
    const { qIndex } = this.state
    const newIndex = qIndex + 2
    if (qIndex >= questions.length - 1) {
      this.setState(() => {
        return { qIndex: 3 }
      })
  } else this.setState(() => {
    return { qIndex: newIndex }
  })
  console.log('toggle questions clicked', newIndex)
  }

  toggleAnswers() {
    const { answersView } = this.state
    // if(aIndex >= length) {
    //   this.setState(() => {
    //           return { aIndex: 1 }
    //         })
    // }else this.setState(() => {
    //   return { aIndex: length - 1 }
    // })
    this.setState(() => {
        return { answersView: !answersView }
      })
  }

  render() {
    const { questions, productName, productId, postFeedback } = this.props
    const { questionsView, answersView, qIndex, aIndex } = this.state
    const questionText = (qIndex < questions.length - 1 ? 'MORE ANSWERED QUESTIONS' : 'COLLAPSE QUESTIONS')

    // const toggleAccordian = (e) => {
    //   if (e.target.name === 'answers') {
    //     console.log('toggled answer view', e.target.name)
    //     this.setState(() => {
    //       return { answersView: true }
    //     })
    //   }
    //   this.setState(() =>
    //   { return {
    //     questionsView: !questionsView
    //   }})
    // }

    return (
      <div className="qa-view">
        {questions && (
        <QuestionsList
          questions={questions}
          questionsView={questionsView}
          answersView={answersView}
          toggleAnswers={this.toggleAnswers}
          handleInput={this.handleInput}
          postFeedback={postFeedback}
          productName={productName}
          canClick={this.canClick}
          qIndex={qIndex}
          aIndex={aIndex}
        />
)}
        <>
          {questions.length > 4 && (
          <span
            className="UserInput"
            name={name}
            onClick={this.toggleQuestions}
            role="button"
            tabIndex={0}
            onKeyPress={this.toggleQuestions}
          >
            {questionText}
          </span>
)}
          <span className="UserInput">
            <Modal
              handleInput={this.handleInput}
              productName={productName}
              id={productId}
              buttonText="Add A Question +"
              qText='About the Product: '
              type="question"
            />
          </span>
        </>
      </div>
    );
  }
};

QAview.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  postInput: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
  postFeedback: PropTypes.func.isRequired,
}

QAview.showDefault = {
  questionsView: false,
  answersView: false,
  modalView: false,
  qIndex: 3,
  aIndex: 1,
}

export default QAview;
