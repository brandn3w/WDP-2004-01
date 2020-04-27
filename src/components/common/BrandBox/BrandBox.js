import React from 'react';
import PropTypes from 'prop-types';

import styles from './BrandBox.module.scss';

const BrandsBox = ({ image, name }) => (
  <div className={styles.thumbnail}>
    <img src={image} alt={name} className={styles.logo} />
  </div>
);

BrandsBox.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default BrandsBox;
