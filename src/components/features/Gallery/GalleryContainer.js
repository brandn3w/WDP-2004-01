import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getAll } from '../../../redux/galleryRedux';
import { getAllTabs } from '../../../redux/galleryRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  galleryTabs: getAllTabs(state),
});

export default connect(mapStateToProps)(Gallery);
