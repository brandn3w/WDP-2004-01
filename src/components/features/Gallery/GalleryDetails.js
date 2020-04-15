import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const GalleryDetails = ({ name, stars, price, oldPrice }) => {
  const starsArray = [1, 2, 3, 4, 5];

  return (
    <>
      <div className={styles.price}>
        <h5>${price}.00</h5>
        <h6>
          <del>{oldPrice ? `$${oldPrice}.00'` : null}</del>
        </h6>
      </div>
      <div className={styles.description}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {starsArray.map(i => (
            <a key={i}>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

GalleryDetails.propTypes = {
  stars: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
};

export default GalleryDetails;
