import React from 'react';
import axios from 'axios';

const withClickTracker = WrappedComponent => {
  class WithClickTracker extends React.Component {
    handleClickTrack(event) {
      console.log(event, WrappedComponent);
      const postBody = {
        'element': event.target,
        'widget': 'hi',
        'time': event.timeStamp
      }

      // axios
      //   .post('/interactions', postBody)
      //   .then(results => console.log(results))
      //   .catch(error => console.log(error))
    }

    render() {
      return (
        <WrappedComponent {...props} handleClickTrack={this.handleClickTrack} />
      )
    }
  }

  return WithClickTracker;
}

export default withClickTracker;