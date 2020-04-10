import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import {} from '../../../redux/categoriesRedux.js';

const mapStateToProps = state => ({
  favorite: state.products.favorite,
  addToCompare: state.products.addToCompare,
});

export default connect(mapStateToProps)(ProductBox);
