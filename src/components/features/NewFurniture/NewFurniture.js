import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import SwipeWrapper from '../../common/SwipeWrapper/SwipeWrapper';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };
  constructor(props) {
    super(props);
    this.rowRef = createRef();
  }

  handlePageChange(newPage) {
    this.rowRef.current.className = 'row fade';
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 250);
  }

  handleCategoryChange(newCategory) {
    this.rowRef.current.classList = 'row fade';
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
    }, 250);
  }

  render() {
    const { categories, products, setCustomerStars, windowMode } = this.props;
    const { activeCategory, activePage } = this.state;
    const productCount = {
      desktops: 8,
      tablets: 3,
      phones: 2,
    };
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productCount[windowMode]);
    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }
    if (this.rowRef.current) {
      this.rowRef.current.className = 'row fade show';
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={
                          item.id === activeCategory ? styles.active : undefined
                        }
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <SwipeWrapper
            leftAction={() =>
              this.handlePageChange(
                activePage + 1 < pagesCount ? activePage + 1 : activePage
              )
            }
            rightAction={() =>
              this.handlePageChange(activePage > 0 ? activePage - 1 : 0)
            }
          >
            <div ref={this.rowRef} className='row fade show'>
              {categoryProducts
                .slice(
                  activePage * productCount[windowMode],
                  (activePage + 1) * productCount[windowMode]
                )
                .map(item => (
                  <div key={item.id} className='col-3'>
                    <ProductBox setCustomerStars={setCustomerStars} {...item} />
                  </div>
                ))}
            </div>
          </SwipeWrapper>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  setCustomerStars: PropTypes.func,
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      customerStars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  windowMode: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
