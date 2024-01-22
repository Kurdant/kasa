import React, { useState, useEffect } from 'react';
import houses from '../houses.json';

const Star = ({ filled }) => (
  <span style={{ color: filled ? '#ff6060' : 'grey' }}>★</span>
);

const HouseRating = ({ match }) => {
  const { id } = match.params;
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const house = houses.find(h => h.id === id);
    if (house) {
      setRating(Number(house.rating));
    }
  }, []);

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

export default HouseRating;
