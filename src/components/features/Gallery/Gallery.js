import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import SwipeWrapper from '../../common/SwipeWrapper/SwipeWrapper';
import GalleryIcons from './GalleryIcons';
import GalleryDetails from './GalleryDetails';
import GalleryStatick from './GalleryStatick';

class Gallery extends React.Component {
  state = {
    startIndex: 1,
    finishIndex: 2,
    toRight: false,
    toLeft: true,
  };

  nextButon() {
    const { startIndex, finishIndex } = this.state;
    const productCount = {
      desktops: 3,
      tablets: 2,
      phones: 0,
    };

    if (finishIndex < this.props.products.length) {
      this.setState({
        startIndex: startIndex + productCount[this.props.windowMode],
        finishIndex: finishIndex + productCount[this.props.windowMode],
      });
    } else {
      this.setState({
        toRight: true,
      });
    }
    this.setState({
      toLeft: false,
    });
    console.log(startIndex, finishIndex);
  }
  prevButon() {
    const { startIndex, finishIndex } = this.state;
    const productCount = {
      desktops: 3,
      tablets: 2,
      phones: 0,
    };

    if (startIndex > 1 && finishIndex > 0) {
      this.setState({
        startIndex: startIndex - productCount[this.props.windowMode],
        finishIndex: finishIndex - productCount[this.props.windowMode],
      });
    } else {
      this.setState({
        toLeft: true,
      });
    }
    this.setState({
      toRight: false,
    });
    console.log(startIndex, finishIndex);
  }

  render() {
    const { products, galleryTabs, setCustomerStars, windowMode } = this.props;
    const { startIndex, finishIndex } = this.state;
    const productCount = {
      desktops: 3,
      tablets: 2,
      phones: 1,
    };
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row ' + styles.galleryBox}>
            <div className='col-sm-12 col-md-6'>
              <div className='row no-gutters'>
                <div className={'col ' + styles.heading}>
                  <h3>Furniture Gallery</h3>
                </div>
              </div>
              <div className={styles.menu}>
                <ul>
                  {galleryTabs.map(tab => {
                    if (tab.active) {
                      return (
                        <li key={tab.id}>
                          <a href='#' className={styles.active}>
                            {tab.name}
                          </a>
                        </li>
                      );
                    } else {
                      return (
                        <li key={tab.id}>
                          <a href='#'>{tab.name}</a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              <div className={styles.product}>
                {products.slice(21).map(product => (
                  <div key={product.id} className={styles.product}>
                    <img src={product.image} alt={product.name} />
                    <GalleryIcons />
                    <GalleryDetails
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      oldPrice={product.oldPrice}
                      stars={product.stars}
                      customerStars={product.customerStars}
                      setCustomerStars={setCustomerStars}
                    />
                  </div>
                ))}
              </div>
              <SwipeWrapper
                leftAction={() =>
                  this.nextButon(finishIndex + productCount[windowMode])
                }
                rightAction={() =>
                  this.prevButon(finishIndex - productCount[windowMode])
                }
                trackMouse
                preventDefaultTouchmoveEvent
              >
                <div className={styles.slider}>
                  <div className={styles.navigation}>
                    <a
                      href='#'
                      onClick={e => {
                        e.preventDefault();
                        this.prevButon(e);
                      }}
                    >
                      &#x3c;
                    </a>
                  </div>
                  <div className={styles.thumbnailBox}>
                    {products
                      .slice(startIndex, finishIndex + productCount[windowMode])
                      .map(product => (
                        <div key={product.id} className={styles.thumbnail}>
                          <img src={product.image} alt={product.name}></img>
                        </div>
                      ))}
                  </div>
                  <div className={styles.navigation}>
                    <a
                      href='#'
                      onClick={e => {
                        e.preventDefault();
                        this.nextButon(e);
                      }}
                    >
                      &#x3e;
                    </a>
                  </div>
                </div>
              </SwipeWrapper>
            </div>
            <div className='col-md-6 d-none d-md-block'>
              <GalleryStatick
                image={products[1].image}
                name={products[1].name}
                price={products[1].price}
                category={products[1].category}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  products: PropTypes.array,
  galleryTabs: PropTypes.array,
  setCustomerStars: PropTypes.func,
  windowMode: PropTypes.string,
};
export default Gallery;
