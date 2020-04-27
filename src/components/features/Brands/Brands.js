import React from 'react';
import PropTypes from 'prop-types';

import BrandsBox from '../../common/BrandBox/BrandBox';
import SwipeWrapper from '../../common/SwipeWrapper/SwipeWrapper';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
  state = {
    activeBrands: 6,
    startIndex: 1,
    finishIndex: 2,
    toRight: false,
    toLeft: true,
  };

  nextButton() {
    const { startIndex, finishIndex } = this.state;
    const brandCount = {
      desktops: 4,
      tablets: 2,
      phones: 0,
    };
    const brands = this.state.brands;

    if (finishIndex < brands.length - brandCount[this.props.windowMode] - 1) {
      this.setState({
        startIndex: startIndex + 1,
        finishIndex: finishIndex + 1,
      });
    } else {
      this.setState({
        toRight: true,
      });
    }
    this.setState({
      toLeft: false,
    });
  }
  prevButton() {
    const { startIndex, finishIndex } = this.state;

    if (startIndex > 1 && finishIndex > 0) {
      this.setState({
        startIndex: startIndex - 1,
        finishIndex: finishIndex - 1,
      });
    } else {
      this.setState({
        toLeft: true,
      });
    }
    this.setState({
      toRight: false,
    });
  }

  render() {
    const { brands, windowMode } = this.props;
    const { startIndex, finishIndex } = this.state;
    const brandCount = {
      desktops: 4,
      tablets: 2,
      phones: 1,
    };

    return (
      <div className={'container'}>
        <SwipeWrapper
          leftAction={() => this.nextButton()}
          rightAction={() => this.prevButton()}
          trackMouse
          preventDefaultTouchmoveEvent
        >
          <div className={styles.componentContainer}>
            <div className={styles.swipe}>
              <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
              <a
                href='#'
                onClick={e => {
                  e.preventDefault();
                  this.prevButton();
                }}
              ></a>
            </div>
            <div className={styles.brandBox}>
              {brands
                .slice((startIndex, finishIndex + brandCount[windowMode]))
                .map(brands => (
                  <div key={brands.id} className={styles.brandContainer}>
                    <BrandsBox {...brands} />
                  </div>
                ))}
            </div>
            <div className={styles.swipe}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
              <a
                href='#'
                onClick={e => {
                  e.preventDefault();
                  this.nextButton();
                }}
              ></a>
            </div>
          </div>
        </SwipeWrapper>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  windowMode: PropTypes.string,
};

export default Brands;
