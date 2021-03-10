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
      idList: [],
      qIndex: 3,
      aIndex: 1,
    };
    this.handleInput = this.handleInput.bind(this)
    this.canClick = this.canClick.bind(this)
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

  render() {
    const { questions, productName, productId, postFeedback } = this.props
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
          handleInput={this.handleInput}
          postFeedback={postFeedback}
          productName={productName}
          canClick={this.canClick}
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
              qText='About the Product: '
              type="question"
            />
          </span>
        </>
      </>
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
