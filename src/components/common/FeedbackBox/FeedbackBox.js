import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const FeedbackBox = ({ name, clientType, image, description }) => (
  <div className={'text-center ' + styles.root}>
    <div className={styles.iconWrapper}>
      <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
    </div>
    <div className={styles.description}>
      <i>{description}</i>
    </div>
    <div className={'text-left ' + styles.client}>
      <img src={image} alt={name} />
      <div className={styles.client_description}>
        <strong>{name}</strong>
        {clientType}
      </div>
    </div>
  </div>
);

FeedbackBox.propTypes = {
  name: PropTypes.string,
  clientType: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default FeedbackBox;
