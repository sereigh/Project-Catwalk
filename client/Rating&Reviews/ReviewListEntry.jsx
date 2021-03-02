import React from 'react';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {review} = this.props;

    return (
      <div>
        <span>Rating:{review.rating}</span>
        <span>
          User:{review.reviewer_name}
          Date:{review.date}
        </span>
        <br />
        <span>Summary:{review.summary}</span>
        <br />
        <p>{review.body}</p>
        {review.photos.map(photo => <img key={photo.id} className='photo' src={photo.url} alt='product' />)}
        <br />
        <span>{review.recommend ? 'I recommend this product' : ''}</span>
        <div>{review.response ? `Response:${  review.response}` : ''}</div>
        <span>
          Helpful?
          <span>Yes ({review.helpfulness})</span>
          <span> | </span>
          <span>No</span>
        </span>
      </div>
    )
  }
}

export default ReviewListEntry;