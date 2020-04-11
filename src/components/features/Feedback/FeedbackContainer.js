import { connect } from 'react-redux';
import Feedback from './Feedback';

import { getAll } from '../../../redux/feedbacksRedux';

const mapStateToProps = state => ({
  feedbacks: getAll(state),
});

export default connect(mapStateToProps)(Feedback);
