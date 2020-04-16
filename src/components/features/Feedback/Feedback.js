import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import FeedbackBox from '../../common/FeedbackBox/FeedbackBox';

class Feedback extends React.Component {
  render() {
    const { feedbacks } = this.props;
    console.log(feedbacks);
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>
                  <li>
                    <a href='#' className={styles.active}>
                      opinion
                    </a>
                  </li>
                  <li>
                    <a href='#'>opinion</a>
                  </li>
                  <li>
                    <a href='#'>opinion</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {feedbacks.map(feedback => (
            <div key={feedback.id}>
              <FeedbackBox {...feedback} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      clientType: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Feedback;
