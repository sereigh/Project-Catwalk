import React from 'react';
import PropTypes from 'prop-types';

import QuestionsList from './QuestionsList.jsx';
import Modal from './Modal.jsx';

class QAview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // questionsView: false,
      answersView: false,
      idList: [],
      openIndex: [0, 1, 2, 3],
      panelIndex: [0, 1, 2, 3],
    };
    this.handleInput = this.handleInput.bind(this)
    this.canClick = this.canClick.bind(this)
    this.toggleQuestions = this.toggleQuestions.bind(this)
    this.toggleAnswers = this.toggleAnswers.bind(this)
    this.togglePanel = this.togglePanel.bind(this)
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

  togglePanel(i) {
    const { panelIndex } = this.state
    const newIndex = panelIndex.slice()

    if (panelIndex.includes(i)) {
      newIndex.splice(newIndex.indexOf(i), 1)
    } else { newIndex.push(i)
    }
    if (panelIndex.length > 4) { newIndex.unshift() }
    this.setState(() => {
      return { panelIndex: newIndex }
    })
  }

  toggleQuestions() {
    const {questions } = this.props
    const { openIndex } = this.state
    if (openIndex.length >= questions.length) {
      this.setState(() => {
        return { openIndex: [...Array(4).keys()] }
      })
  } else this.setState(() => {
    return { openIndex: [...Array(openIndex.length + 2).keys()] }
  })
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

    //   if (openIndex[openIndex.length - 1] >= questions.length - 1) {
    //     this.setState(() => {
    //       return { openIndex: [0, 1, 2, 3] }
    //     })
    //   } else newIndex.push(newIndex.pop() + 1, newIndex.pop() + 2)
    //   newIndex.unshift()
    //   newIndex.unshift()
    //   this.setState(() => {
    //     return { openIndex: newIndex }
    //   })
    //   console.log('toggle questions clicked', newIndex)
    // }
    this.setState(() => {
        return { answersView: !answersView }
      })
  }

  render() {
    const { questions, productName, productId, postFeedback } = this.props
    const { answersView, openIndex, panelIndex } = this.state
    const questionText = (openIndex.length < questions.length ? 'MORE ANSWERED QUESTIONS' : 'COLLAPSE QUESTIONS')

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
          // questionsView={questionsView}
          answersView={answersView}
          toggleAnswers={this.toggleAnswers}
          handleInput={this.handleInput}
          postFeedback={postFeedback}
          productName={productName}
          canClick={this.canClick}
          openIndex={openIndex}
          togglePanel={this.togglePanel}
          panelIndex={panelIndex}
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
  openIndex: [0, 1, 2, 3],
  panelIndex: [0, 1, 2, 3],
}

export default QAview;
