import React from 'react';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const GalleryIcons = () => (
  <div className={styles.icons}>
    <ul>
      <li>
        <Button variant='outlineOrange'>
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </Button>
        <div className={styles.tooltip}>Like</div>
      </li>
      <li>
        <Button variant='outlineOrange'>
          <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
        </Button>
        <div className={styles.tooltip}>Compare</div>
      </li>
      <li>
        <Button variant='outlineOrange'>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Button>
        <div className={styles.tooltip}>Details</div>
      </li>
      <li>
        <Button variant='outlineOrange'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
        </Button>
        <div className={styles.tooltip}>Buy now</div>
      </li>
    </ul>
  </div>
);

export default GalleryIcons;
