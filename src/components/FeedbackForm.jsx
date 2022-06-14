import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [isDisabled, setIsDisbled] = useState(true);
  const [message, setMessage] = useState('');

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
        id: uuidv4(),
        text,
        rating,
      };
      handleAdd(newFeedback);
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