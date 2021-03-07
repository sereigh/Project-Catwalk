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
    this.handleQuestionAdd = this.handleQuestionAdd.bind(this);
    this.handleAnswerAdd = this.handleAnswerAdd.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }


  handleAnswerAdd(e, input) {
    const { postFeedback } = this.props
    event.preventDefault();
    postFeedback('answer', input);
    console.log('handle answer add triggered');
  }

  handleQuestionAdd(e, input) {
    const { postFeedback } = this.props
    event.preventDefault();
    postFeedback('question', input);
    console.log('handle question add triggered')
  }

  toggleModal() {
    const { modalView } = this.state
    console.log('handle modal close triggered');
    this.setState({ modalView: !modalView });
  }

  render() {
    const { questions, postFeedback } = this.props
    const { questionsView, answersView, viewModal } = this.state;

    const toggleView = (e) => {
      if (e.target.name === 'answers') {
        console.log('toggled answer view');
        this.setState(() => {return { answersView: !answersView}})
      }
      this.setState(() => {return {questionsView: !questionsView}})
    };

    return (
      <>
        {questions && (
        <QuestionsList
          questions={questions}
          questionsView={questionsView}
              // handleFeedback={this.handleFeedback}
          answersView={answersView}
          toggleView={toggleView}
          postFeedback={postFeedback}
        />
)}
        <>
          {questions.length < 4 && <UserInput text="MORE ANSWERED QUESTIONS" name="questions" handler={toggleView} />}
          <Modal buttonText="ADD A QUESTION +" viewModal={viewModal} handleAdd={this.handleQuestionAdd} toggleModal={this.toggleModal} />
          {/* <UserInput text="ADD A QUESTION +" name="questions" handler={() => console.log('create a post route!')} /> */}
        </>
      </>
    );
  }
};

QAList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  postFeedback: PropTypes.func.isRequired,
}

QAList.showDefault = {
  questionsView: false,
  answersView: false,
  viewModal: false,
}

export default QAList;
