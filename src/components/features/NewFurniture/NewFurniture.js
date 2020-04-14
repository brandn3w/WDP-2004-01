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
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
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
            <div className='no-gutters align-items-center column'>
              <div className={'col-auto' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'row' + styles.dots}>
                <ul className={'row justify-content-center'}>{dots}</ul>
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
                .slice(activePage * 8, (activePage + 1) * 8)
                .map(item => (
                  <div key={item.id} className='col-12 col-sm-6 col-lg-3'>
                    <ProductBox {...item} />
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
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
