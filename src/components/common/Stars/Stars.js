import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Stars = ({ stars, customerStars, id, setCustomerStars }) => {
  const [starsHighlightConfirmed, setStarsHighlightConfirmed] = useState(
    customerStars > 0 ? customerStars : stars
  );
  const [starsHighlight, setStarsHighlight] = useState(starsHighlightConfirmed);
  const starsArray = [1, 2, 3, 4, 5];
  const handleStarMouseOver = (e, i) => {
    setStarsHighlight(i);
  };
  const handleStarMouseLeave = () => {
    setStarsHighlight(starsHighlightConfirmed);
  };
  const handleStarClick = (e, i) => {
    e.preventDefault();
    setStarsHighlightConfirmed(i);
    setCustomerStars(i, id);
  };
  return (
    <div className={styles.stars}>
      {starsArray.map(i => (
        <a key={i}>
          {
            <FontAwesomeIcon
              onMouseOver={e => handleStarMouseOver(e, i)}
              onMouseLeave={e => handleStarMouseLeave(e, i)}
              onClick={e => {
                handleStarClick(e, i);
              }}
              className={customerStars > 0 ? styles.customerStars : ''}
              icon={starsHighlight >= i ? faStar : farStar}
            >
              {i} stars
            </FontAwesomeIcon>
          }
        </a>
      ))}
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number,
  customerStars: PropTypes.number,
  setCustomerStars: PropTypes.func,
  id: PropTypes.string,
};

export default Stars;
