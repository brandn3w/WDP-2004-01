import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <FeatureBox icon={faTruck} active>
            <a href='#'>Free shipping</a>
            <p>All orders</p>
          </FeatureBox>
        </div>
        <div className='col'>
          <FeatureBox icon={faHeadphones}>
            <a href='#'>24/7 customer</a>
            <p>support</p>
          </FeatureBox>
        </div>
        <div className='col'>
          <FeatureBox icon={faReplyAll}>
            <a href='#'>Money back</a>
            <p>guarantee</p>
          </FeatureBox>
        </div>
        <div className='col'>
          <FeatureBox icon={faBullhorn}>
            <a href='#'>Member discount</a>
            <p>First order</p>
          </FeatureBox>
        </div>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
