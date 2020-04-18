import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Stars = ({ stars, customerStars, id, setCustomerStars }) => {
  const [starsHighlight, setStarsHighlight] = useState(0);
  const starsArray = [1, 2, 3, 4, 5];
  const handlerStarMouseOver = i => {
    setStarsHighlight(i);
  };
  const handlerStarMouseLeave = () => {
    setStarsHighlight(0);
  };
  const handlerStarClick = (e, i) => {
    e.preventDefault();
    setCustomerStars(i, id);
  };
  return (
    <div className={styles.stars}>
      {starsArray.map(i => (
        <a key={i}>
          {
            <FontAwesomeIcon
              onMouseOver={() => handlerStarMouseOver(i)}
              onMouseLeave={() => handlerStarMouseLeave(i)}
              onClick={e => {
                handlerStarClick(e, i);
              }}
              className={
                customerStars || starsHighlight > 0 ? styles.customerStars : undefined
              }
              icon={
                starsHighlight > 0
                  ? starsHighlight >= i
                    ? faStar
                    : farStar
                  : customerStars > 0
                  ? customerStars >= i
                    ? faStar
                    : farStar
                  : stars >= i
                  ? faStar
                  : farStar
              }
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
