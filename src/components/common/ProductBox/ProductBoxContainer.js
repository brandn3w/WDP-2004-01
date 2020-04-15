import { connect } from 'react-redux';

import ProductBox from './ProductBox';
import { getCountProductToCompare, addToCompare } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  countProductToCompare: () => getCountProductToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: id => dispatch(addToCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
