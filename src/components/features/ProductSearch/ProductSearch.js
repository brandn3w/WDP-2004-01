import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = ({ categories, children, setSearch }) => {
  const changeCategory = (id, name) => {
    labelRef.current.innerHTML = name;
    ulRef.current.attributes.name.value = name;
    ulRef.current.attributes.id.value = id;
  };
  const ulRef = useRef();
  const labelRef = useRef();
  const searchPhraseRef = useRef();
  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <ul ref={ulRef} name='' id='' className={styles.select}>
          <li ref={labelRef} className={styles.selectPlaceholder}>
            Select a category
          </li>
          <li className={styles.optionsWrapper}>
            <ul className={styles.options}>
              {categories
                ? categories.map(item => (
                    <li
                      onClick={() => {
                        changeCategory(item.name, item.id);
                      }}
                      key={item.id}
                      className={styles.option}
                    >
                      {item.name}
                    </li>
                  ))
                : ''}
            </ul>
          </li>
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input ref={searchPhraseRef} placeholder='Search products...' type='text' />
        <button
          onClick={() =>
            setSearch({
              category: ulRef.current.attributes.id.value,
              searchPhrase: searchPhraseRef.current.value,
            })
          }
        >
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
  setSearch: PropTypes.func,
};

export default ProductSearch;
