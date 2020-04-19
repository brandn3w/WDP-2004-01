import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Promotions from '../../features/Promotions/PromotionsContainer';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';
import ProductsToCompare from '../../features/ProductsToCompare/ProductsToCompareContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <ProductsToCompare />
    <Gallery />
    <Brands />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
