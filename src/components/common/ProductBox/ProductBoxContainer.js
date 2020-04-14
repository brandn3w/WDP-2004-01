import { connect } from 'react-redux';
import { toggleFavorite } from '../../../redux/productsRedux';
import ProductBox from './ProductBox';

export const getProductsForButtons = ({ buttons }, productsId) =>
  buttons.filter(button => button.productsId === productsId);

const mapStateToProps = state => ({
  favorite: state.products.favorite,
});

const mapDispatchToProps = dispatch => ({
  togglefavorites: () => dispatch(toggleFavorite()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
