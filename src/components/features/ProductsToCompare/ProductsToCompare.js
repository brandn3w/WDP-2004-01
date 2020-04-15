import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsToCompare.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const ProductsToCompare = ({ products, removeFromCompare }) => {
  if (products.length === 0) return null;
  return (
    <div className={styles.root}>
      <div className='row'>
        <div className='col-10'>
          <div className='row'>
            {products.map(product => {
              return (
                <div key={product.id} className='col-3'>
                  <div className={styles.photo}>
                    <img
                      className={styles.image}
                      src={product.image}
                      alt={product.name}
                    />
                    <div
                      onClick={() => {
                        removeFromCompare(product.id);
                      }}
                      className={styles.remove}
                    >
                      <FontAwesomeIcon icon={faMinusCircle}> remove </FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={'col-2 ' + styles.buttonWrapper}>
          <Button className={styles.btnCompare} variant='outline'>
            Compare products
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductsToCompare.propTypes = {
  products: PropTypes.array,
  removeFromCompare: PropTypes.func,
};

export default ProductsToCompare;
