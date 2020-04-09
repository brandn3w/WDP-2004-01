import { connect } from 'react-redux';

import ProductSearch from './ProductSearch';

import { getAll } from '../../../redux/categoriesRedux.js';
import { createActionSetSearch } from '../../../redux/searchRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  setSearch: (category, searchPhrase) =>
    dispatch(
      createActionSetSearch({
        category,
        searchPhrase,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
