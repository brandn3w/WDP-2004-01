import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';

import Stars from '../../common/Stars/Stars';

const GalleryDetails = ({
  id,
  name,
  stars,
  price,
  oldPrice,
  customerStars,
  setCustomerStars,
}) => {
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
        <Stars
          stars={stars}
          customerStars={customerStars}
          setCustomerStars={setCustomerStars}
          id={id}
        />
      </div>
    </>
  );
};

GalleryDetails.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  customerStars: PropTypes.number,
  setCustomerStars: PropTypes.func,
};

export default GalleryDetails;
