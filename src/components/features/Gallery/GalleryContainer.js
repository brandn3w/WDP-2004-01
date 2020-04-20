import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getAll, getAllTabs } from '../../../redux/galleryRedux';
import { setCustomerStars } from '../../../redux/productsRedux.js';
import { getMode } from '../../../redux/windowRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  galleryTabs: getAllTabs(state),
  windowMode: getMode(state),
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
