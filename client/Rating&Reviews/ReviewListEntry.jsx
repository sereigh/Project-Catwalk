import React from 'react';
import PropTypes from 'prop-types';

import Stars from '../SharedComponents/Stars.jsx';

import NameAndDate from './NameAndDate.jsx';
import Summary from './Summary.jsx';
import Body from './Body.jsx';
import PhotoList from './PhotoList.jsx';
import Recommend from './Recommend.jsx';
import Response from './Response.jsx';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: null
    };

    this.handleVote = this.handleVote.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  handleVote(vote, id) {
    if (!localStorage.getItem(`hasVoted${id}`)) {
      if (vote === 'yes') {
        this.setState({
          vote: 'yes'
        });
      } else if (vote === 'no') {
        this.setState({
          vote: 'no'
        });
      }

      localStorage.setItem(`hasVoted${id}`, true);
    }
  }

  handleReport(id) {
    localStorage.removeItem(`hasVoted${id}`);
    this.setState({
      vote: null
    })
  }

  render() {
    const {review} = this.props;
    const {vote} = this.state;

    return (
      <div className='review'>
        <Stars rating={review.rating} />
        <NameAndDate name={review.reviewer_name} date={review.date} />
        <br />
        <Summary summary={review.summary} />
        <Body body={review.body} />
        <PhotoList photos={review.photos} />
        <br />
        <Recommend recommend={review.recommend} />
        <Response response={review.response} />
        <span>
          Helpful?
          <span
            className={vote === 'yes' ? 'yes' : 'vote'}
            onClick={() => this.handleVote('yes', review.review_id)}
            onKeyPress={() => this.handleVote('yes', review.review_id)}
            role='button'
            tabIndex={0}
          >
            {` Yes (${review.helpfulness})`}
          </span>
          <span> | </span>
          <span
            className={vote === 'no' ? 'no' : 'vote'}
            onClick={() => this.handleVote('no', review.review_id)}
            onKeyPress={() => this.handleVote('no', review.review_id)}
            role='button'
            tabIndex={0}
          >
            No
          </span>
          <span> | </span>
          <span
            onClick={() => this.handleReport(review.review_id)}
            onKeyPress={() => this.handleReport(review.review_id)}
            role='button'
            tabIndex={0}
          >
            Report
          </span>
        </span>
      </div>
    )
  }
}

ReviewListEntry.propTypes = {
  review: PropTypes.shape({
    review_id: PropTypes.number,
    rating: PropTypes.number,
    summary: PropTypes.string,
    recommend: PropTypes.bool,
    response: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    reviewer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string
    }))
  }).isRequired
}

export default ReviewListEntry;