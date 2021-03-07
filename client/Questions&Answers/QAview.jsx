import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

import QuestionsList from './QuestionsList.jsx';
import UserInput from './UserInput.jsx';
import Modal from './Modal.jsx';

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsView: false,
      answersView: false,
      modalView: false,
    };
    this.handleQuestionAdd = this.handleQuestionAdd.bind(this)
    this.handleAnswerAdd = this.handleAnswerAdd.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
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

  toggleModal() {
    const { modalView } = this.state
    console.log('toggle modal triggered')
    this.setState(() => {return { modalView: !modalView }})
  }


  render() {
    const { questions, postFeedback } = this.props
    const { questionsView, answersView, modalView } = this.state
    const questionText = (questionsView ? 'COLLAPSE QUESTIONS' : 'MORE ANSWERED QUESTIONS')

    const toggleAccordian = (e) => {
      if (e.target.name === 'answers') {
        console.log('toggled answer view', e.target.name)
        this.setState(() => { return { answersView: !answersView } })
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
          handleAdd={this.handleQuestionAdd}
        />
)}
        <>
          <UserInput text={questionText} name="questions" handler={toggleAccordian} />

          <Modal buttonText="ADD A QUESTION +" modalView={modalView} handleQuestionAdd={this.handleQuestionAdd} toggleModal={this.toggleModal} />
        </>
      </>
    );
  }
};

QAList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  postFeedback: PropTypes.func.isRequired,
  postInput: PropTypes.func.isRequired,
}

QAList.showDefault = {
  questionsView: false,
  answersView: false,
  modalView: false,
}

export default QAList;
