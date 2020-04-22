import React, { createRef } from 'react';
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
    activeTab: 'topseller',
    mainSlide: 'aenean-ru-bristique-14',
    newSlide: '',
  };
  constructor(props) {
    super(props);
    this.rowRef = createRef();
    this.silderRef = createRef();
  }

  TabChange(newTab) {
    this.silderRef.current.className = styles.slider + ' fade show';
    this.rowRef.current.className = styles.product + '  fade show';

    this.setState({
      activeTab: newTab,
    });
    setTimeout(() => {
      const filterTabGallery = this.props.products.filter(
        item => item[this.state.activeTab]
      );
      this.setState({
        mainSlide: filterTabGallery[0].id,
      });
    }, 250);
  }

  slideChange(newSlide) {
    this.rowRef.current.classList = styles.product + '  fade show';
    this.setState({ mainSlide: newSlide });
  }

  nextButon() {
    const { startIndex, finishIndex } = this.state;
    const productCount = {
      desktops: 3,
      tablets: 2,
      phones: 0,
    };
    const filterTabGallery = this.props.products.filter(
      item => item[this.state.activeTab]
    );

    if (
      finishIndex <
      filterTabGallery.length - productCount[this.props.windowMode] - 1
    ) {
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
  prevButon() {
    const { startIndex, finishIndex } = this.state;
    const productCount = {
      desktops: 3,
      tablets: 2,
      phones: 0,
    };

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
    const { products, galleryTabs, setCustomerStars, windowMode } = this.props;
    const { startIndex, finishIndex, activeTab, mainSlide } = this.state;
    const productCount = {
      desktops: 4,
      tablets: 2,
      phones: 1,
    };
    const filterTabGallery = products.filter(item => item[activeTab]);

    if (this.rowRef.current) {
      this.rowRef.current.className = styles.product;
    }
    if (this.silderRef.current) {
      this.silderRef.current.className = styles.slider;
    }

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
                  {galleryTabs.map(tab => (
                    <li key={tab.id}>
                      <a
                        className={tab.id === activeTab ? styles.active : undefined}
                        onClick={() => this.TabChange(tab.id)}
                      >
                        {tab.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div ref={this.rowRef} className={styles.product}>
                {filterTabGallery
                  .filter(product => product.id === mainSlide)
                  .map(product => (
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
                leftAction={() => this.nextButon()}
                rightAction={() => this.prevButon()}
                trackMouse
                preventDefaultTouchmoveEvent
              >
                <div ref={this.silderRef} className={styles.slider}>
                  <div className={styles.navigation}>
                    <a
                      href='#'
                      onClick={e => {
                        e.preventDefault();
                        this.prevButon();
                      }}
                    >
                      &#x3c;
                    </a>
                  </div>
                  <div className={styles.thumbnailBox}>
                    {filterTabGallery
                      .slice(startIndex, finishIndex + productCount[windowMode])
                      .map(product => (
                        <div
                          onClick={() => {
                            this.slideChange(product.id);
                          }}
                          key={product.id}
                          className={styles.thumbnail}
                        >
                          <img src={product.image} alt={product.name}></img>
                        </div>
                      ))}
                  </div>
                  <div className={styles.navigation}>
                    <a
                      href='#'
                      onClick={e => {
                        e.preventDefault();
                        this.nextButon();
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
