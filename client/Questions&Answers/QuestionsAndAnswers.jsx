/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import QAList from './QAList.jsx';
import sortQuestions from './utility.jsx'
// import QuestionsMenu from './QuestionsMenu.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      inputValue: 'HAVE A QUESTION? SEARCH FOR ANSWERS...',
    };
    this.getAllQuestions = this.getAllQuestions.bind(this);
    this.handleSearchChange = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getAllQuestions();
  }


  handleSearchChange(e) {
    const { inputValue, questions } = this.state;
    const filterQuestions =  questions.filter(question => question.body.toLowerCase().includes(inputValue.toLowerCase()));

    this.setState({[inputValue]: e.target.value});
    if (inputValue.length > 3) {
      filterQuestions(inputValue);
    }
  }

  getAllQuestions() {
    const { productId } = this.props;
    const { questions } = this.state;

    axios.get(`/qa/questions/${productId}`)
    .then((response) => sortQuestions(response))
    .then((response) => this.setState({ [questions]: response[1] }))
    .catch((err) => err)
  }

  render() {

    const { questions, inputValue } = this.state;

    const filterQuestions =  questions.filter(question => question.body.toLowerCase().includes(inputValue.toLowerCase()));

    return (
      <div className="qaHeader" style={{ border: 'solid black thin' }}>
        <div className="qaSearch" style={{ border: 'solid black thin' }}>
          <form>
            <input
              type="text"
              name="search"
              onChange={this.handleSearchChange}
              value={inputValue}
            />
          </form>
        </div>
        <QAList questions={questions} postFeedback={this.postFeedback} />
        {/* <QuestionsMenu handleSubmit={this.handleSubmit} toggleView={this.toggleView} /> */}
      </div>
    );
  }
};

QuestionsAndAnswers.propTypes = {
  productId: PropTypes.number.isRequired,
}
// QuestionsAndAnswers.showDefault = {
//   questions: [],
// }

export default QuestionsAndAnswers;