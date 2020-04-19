import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import GalleryIcons from './GalleryIcons';
import GalleryDetails from './GalleryDetails';
import GalleryStatick from './GalleryStatick';

class Gallery extends React.Component {
  render() {
    const { products, galleryTabs, setCustomerStars } = this.props;

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

              <div className={styles.slider}>
                <div className={styles.navigation}>
                  <a
                    href='#'
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    &#x3c;
                  </a>
                </div>
                <div className={styles.thumbnailBox}>
                  {products.slice(10, 16).map(product => (
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
                    }}
                  >
                    &#x3e;
                  </a>
                </div>
              </div>
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
};
export default Gallery;
