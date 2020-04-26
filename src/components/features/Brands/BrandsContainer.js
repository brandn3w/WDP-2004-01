import { connect } from 'react-redux';
import Brands from './Brands';

import { getAll } from '../../../redux/brandsRedux';
import { getMode } from '../../../redux/windowRedux';

const mapStateToProps = state => ({
  brands: getAll(state),
  windowMode: getMode(state),
});

export default connect(mapStateToProps)(Brands);
