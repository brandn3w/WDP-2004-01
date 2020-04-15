import { connect } from 'react-redux';

import ProductBox from './ProductBox';
import {
  getAll,
  createAction_toggleFavorite,
  getCountProductToCompare,
  addToCompare,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  countProductToCompare: () => getCountProductToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: id => dispatch(addToCompare(id)),
  toggleFavorite: productId => dispatch(createAction_toggleFavorite(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
