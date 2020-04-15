import { connect } from 'react-redux';

import MainLayout from './MainLayout';
import { setWindow } from '../../../redux/windowRedux.js';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setWindow: (width, height) =>
    dispatch(
      setWindow({
        height: height,
        width: width,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
