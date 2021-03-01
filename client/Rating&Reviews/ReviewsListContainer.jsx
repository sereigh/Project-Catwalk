import React from 'react';

class ReviewsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'relevance'
    };
  }

  render() {
    const {selected} = this.state

    return (
      <span>
        ### reviews, sorted by:
        <select defaultValue={selected}>
          <option value='relevance'>relevance</option>
          <option value='helpfulness'>helpfulness</option>
          <option value='newest'>newest</option>
        </select>
      </span>
    )
  }
}

export default ReviewsListContainer;