import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';

const GalleryStatick = ({ image, name, price, category }) => (
  <div className={styles.picture}>
    <img src={image} alt={name}></img>
    <div className={styles.content}>
      <p>
        From <span>${price}.00</span>
      </p>
      <h2>{category}</h2>
      <Button variant='green'>Shop now</Button>
    </div>
  </div>
);

GalleryStatick.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.string,
};

export default GalleryStatick;
