import React from 'react';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  convertDate(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateObj = new Date(date);
    const day = dateObj.getDate() + 1;
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  render() {
    const {review} = this.props;

    return (
      <div className='review'>
        <span>Rating:{review.rating}</span>
        <span className='name-and-date'>{`${review.reviewer_name  }, ${  this.convertDate(review.date)}`}</span>
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
          <span> Yes ({review.helpfulness})</span>
          <span> | </span>
          <span>No</span>
        </span>
      </div>
    )
  }
}

export default ReviewListEntry;