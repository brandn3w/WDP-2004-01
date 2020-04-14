import { connect } from 'react-redux';
import {
  createAction_toggleFavorite,
  createAction_toggleCompare,
  getAll,
} from '../../../redux/productsRedux';
import ProductBox from './ProductBox';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCompare: productId => dispatch(createAction_toggleCompare(productId)),
  toggleFavorite: productId => dispatch(createAction_toggleFavorite(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
