import React, { useEffect, useState, useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';

const RatingSelect = ({ select }) => {
  const { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className='rating'>
      {[...Array(10)].map((el, index) => {
        return (
          <li key={`rating-${index}`}>
            <input
              type='radio'
              id={`num${index + 1}`}
              name='rating'
              value={index + 1}
              onChange={handleChange}
              checked={selected === index + 1}
            />
            <label htmlFor={`num${index + 1}`}>{index + 1}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default RatingSelect;
