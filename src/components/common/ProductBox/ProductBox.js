import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  image,
  addToCompare,
  countProductToCompare,
  customerStars,
  setCustomerStars,
  id,
  favorite,
  toggleFavorite,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={name} className={styles.image} />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <Stars
        stars={stars}
        customerStars={customerStars}
        setCustomerStars={setCustomerStars}
        id={id}
      />
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          onClick={e => {
            e.preventDefault();
            toggleFavorite({ id });
          }}
          variant={favorite ? 'active' : 'outline'}
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          onClick={e => {
            e.preventDefault();
            if (countProductToCompare() < 4) {
              addToCompare(id);
            }
          }}
          variant={compare ? 'active' : 'outline'}
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        {!oldPrice ? null : (
          <Button noHover variant='outline'>
            <div className={styles.oldPrice}>$ {oldPrice}</div>
          </Button>
        )}
        <Button className={styles.priceHover} noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  id: PropTypes.string,
  toggleCompare: PropTypes.func,
  toggleFavorite: PropTypes.func,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  countProductToCompare: PropTypes.func,
  addToCompare: PropTypes.func,
  customerStars: PropTypes.number,
  setCustomerStars: PropTypes.func,
};

export default ProductBox;
