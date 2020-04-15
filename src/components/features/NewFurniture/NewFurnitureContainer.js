import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, setCustomerStars } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  setCustomerStars: (customerStars, id) =>
    dispatch(
      setCustomerStars({
        customerStars,
        id,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
