import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import QuestionsList from './QuestionsList.jsx';
import AnswersList from './AnswersList.jsx';
import QuestionsMenu from './QuestionsMenu.jsx';

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonView: false,
      questionsView: false,
      answersView: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleView = this.toggleView.bind(this);
    // this.handleFeedback = this.handleFeedback.bind(this);
  }

  handleFeedback() {
    console.log('feedback handled');
  }

  handleSubmit() {
    console.log('handle submit triggered');
  }

  toggleView(e) {
    const { questions } = this.state;
    if (questions) {
      this.setState({ buttonView: true });
    } else {
      if (e.target.name === 'questions') {
        this.setState({questionsView: true});
      }
      if (e.target.name === 'answers') {
        this.setState({answersView: true});
      }
    }
  }

  render() {
    const { questions } = this.props
    const { buttonView, questionsView, answersView } = this.state;

    return (
      <>
        {
        questions
        && (
        <QuestionsList
          questions={questions}
          handleFeedback={this.handleFeedback}
          questionsView={questionsView}
          AnswersList={(
            <AnswersList
              answersView={answersView}
              handleFeedback={this.handleFeedback}
            />
        )}
        />
      )
}
        {/* <QuestionsMenu handleSubmit={this.handleSubmit} toggleView={this.toggleView} /> */}
      </>
    );
  }
};

QAList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
}

// QAList.showDefault = {
//   buttonView: false,
//   questionsView: false,
//   answersView: false,
// }

export default QAList;