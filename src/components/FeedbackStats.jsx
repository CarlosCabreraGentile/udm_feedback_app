import React from 'react';
import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {
    let average = feedback.reduce((accum, curr) => {
        return accum + curr.rating;
    }, 0) / feedback.length;

    let averageFormatted = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Rating: {isNaN(average) ? 0 : averageFormatted}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
};

export default FeedbackStats
