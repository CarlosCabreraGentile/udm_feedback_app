import React, { useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';
import PropTypes from 'prop-types';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

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

export default FeedbackStats
