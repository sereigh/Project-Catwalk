import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

import QuestionsList from './QuestionsList.jsx';
import UserInput from './UserInput.jsx';

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsView: false,
      answersView: false,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFeedback = this.handleFeedback.bind(this);
  }

  // handleFeedback() {

  //   console.log('feedback handled on top-level');
  // }

  // handleSubmit() {
  //   console.log('handle submit triggered');
  // }


  render() {
    const { questions, postFeedback } = this.props
    const { questionsView, answersView } = this.state;

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
          <UserInput text="ADD A QUESTION +" name="questions" handler={() => console.log('create a post route!')} />
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
}

export default QAList;
