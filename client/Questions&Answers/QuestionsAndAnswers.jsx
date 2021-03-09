import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import QAview from './QAview.jsx';
import sortQuestions, {filterQuestions, findPath} from './Utility.jsx'

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      inputValue: '',
      filtered: false,
      filteredQuestions: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSearchClear = this.handleSearchClear.bind(this)
    this.postFeedback = this.postFeedback.bind(this)
    this.postInput = this.postInput.bind(this);
  }

  componentDidMount() {
    this.getAllQuestions()
  }

  handleSearchChange(e) {
    e.preventDefault()
    const { inputValue, questions } = this.state
    this.setState({ inputValue: e.target.value })

    if (inputValue.length > 2) {
      this.setState({ filteredQuestions: filterQuestions(questions, e.target.value), filtered: true })
    } else {
      this.setState({ filtered: false })
    }
}

  handleSearchClear(e) {
    const { inputValue } = this.state;
    e.preventDefault()
    if (!inputValue) { this.setState({ filtered: false }) }
  }

  getAllQuestions() {
    const { productId } = this.props
    axios.get(`/qa/questions/${productId}`)
    .then((response) => sortQuestions(response))
    .then((response) => {console.log(response[1].length, response[1]); this.setState({ questions: response[1] })})
    .catch((err) => err)
  }

  postInput(type, id, option, input) {
    console.log('create a modal')
    const endPoint = findPath(type, id, option)
    axios.post(endPoint, input)
          .then(() => this.getAllQuestions())
          .catch((err) => err)
  }

  postFeedback(type, id, option) {
    // remove after modal
    if (option === 'Add Comment') { this.postInput(type, id, option) }
    if (type === 'reported') { this.getAllQuestions() }
    const endPoint = findPath(type, id, option)
    // remove after modal
    console.log(endPoint, type, id, option)
        axios.put(endPoint)
          .then(() => this.getAllQuestions())
          .catch((err) => err)
      }

  render() {

    const { questions, inputValue, filtered, filteredQuestions } = this.state
    const { productName, productId } = this.props

    return (
      <div className="qaContainer">

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            className="searchBar"
            onChange={this.handleSearchChange}
            onClick={this.handleSearchClear}
            value={inputValue}
            placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
          />
        </form>
        {filtered ? <QAview questions={filteredQuestions} postFeedback={this.postFeedback} postInput={this.postInput} productName={productName} productId={productId} /> : <QAview questions={questions} postFeedback={this.postFeedback} postInput={this.postInput} productName={productName} productId={productId} />}
      </div>
    );
  }
};

QuestionsAndAnswers.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
}

export default QuestionsAndAnswers;
