import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getAll } from '../../../redux/galleryRedux';
import { getAllTabs } from '../../../redux/galleryRedux';
import { setCustomerStars } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  galleryTabs: getAllTabs(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
