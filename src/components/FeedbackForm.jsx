import React, { useEffect, useState, useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [isDisabled, setIsDisbled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (feedbackEdit.edit) {
      setIsDisbled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === '') {
      setIsDisbled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length < 10) {
      setIsDisbled(true);
      setMessage('Text to short, at least 10 characters');
    } else {
      setMessage(null);
      setIsDisbled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        const updatedFeedbackValues = {
          id: feedbackEdit.item.id,
          text,
          rating,
        };
        updateFeedback(updatedFeedbackValues);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate our service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisable={isDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
