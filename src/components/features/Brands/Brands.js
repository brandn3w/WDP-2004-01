import React from 'react';
import PropTypes from 'prop-types';

import BrandsBox from '../../common/BrandBox/BrandBox';

import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
  render() {
    const { brands } = this.props;
    console.log(brands);
    return (
      <div className={'container'}>
        <div className={styles.componentContainer}>
          <div className={styles.swipe}>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
          </div>
          {brands.map(brands => (
            <div key={brands.id} className={styles.brandContainer}>
              <BrandsBox {...brands} />
            </div>
          ))}
          {brands.map(brands => (
            <div key={brands.id} className={styles.brandContainer}>
              <BrandsBox {...brands} />
            </div>
          ))}
          {brands.map(brands => (
            <div key={brands.id} className={styles.brandContainer}>
              <BrandsBox {...brands} />
            </div>
          ))}
          {brands.map(brands => (
            <div key={brands.id} className={styles.brandContainer}>
              <BrandsBox {...brands} />
            </div>
          ))}
          {brands.map(brands => (
            <div key={brands.id} className={styles.brandContainer}>
              <BrandsBox {...brands} />
            </div>
          ))}
          {brands.map(brands => (
            <div key={brands.id} className={styles.brandContainer}>
              <BrandsBox {...brands} />
            </div>
          ))}
          <div className={styles.swipe}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </div>
        </div>
      </div>
    );
  }
}
Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Brands;
