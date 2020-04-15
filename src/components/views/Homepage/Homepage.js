import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import ProductsToCompare from '../../features/ProductsToCompare/ProductsToCompareContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <ProductsToCompare />
    <Gallery />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
