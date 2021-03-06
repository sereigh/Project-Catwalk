import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import QAList from './QAList.jsx';
import sortQuestions, {filterQuestions} from './utility.jsx'
// import QuestionsMenu from './QuestionsMenu.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      inputValue: '',
      filtered: false,
      filteredQuestions: []
    };
    // this.getAllQuestions = this.getAllQuestions.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    this.getAllQuestions();
  }

  handleSearchChange(e) {
    e.preventDefault();
    const { inputValue, questions } = this.state;
    const allQuestions = questions.slice();

    this.setState({ inputValue: e.target.value });

    if (inputValue.length > 2) {
      this.setState({ filteredQuestions: filterQuestions(questions, e.target.value), filtered: true });
    }
    this.setState({ questions: allQuestions });
  }

  getAllQuestions() {
    const { productId } = this.props;
    // const { questions, filteredQuestions, filtered, inputValue } = this.state;

    axios.get(`/qa/questions/${productId}`)
    .then((response) => sortQuestions(response))
    .then((response) => {this.setState({ questions: response[1] })})
    .catch((err) => err)
  }

  render() {

    const { questions, inputValue, filtered, filteredQuestions } = this.state;

    return (
      <div className="qaHeader" style={{ border: 'solid black thin' }}>
        <div className="qaSearch" style={{ border: 'solid black thin' }}>
          <form>
            <input
              type="text"
              className="search"
              onChange={this.handleSearchChange}
              value={inputValue}
              placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
            />
          </form>
        </div>
        {filtered ? <QAList questions={filteredQuestions} postFeedback={this.postFeedback} /> : <QAList questions={questions} postFeedback={this.postFeedback} />}
      </div>
    );
  }
};

QuestionsAndAnswers.propTypes = {
  productId: PropTypes.number.isRequired,
}

export default QuestionsAndAnswers;