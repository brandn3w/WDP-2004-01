import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import FeedbackBox from '../../common/FeedbackBox/FeedbackBox';
import SwipeWrapper from '../../common/SwipeWrapper/SwipeWrapper';

class Feedback extends React.Component {
  state = {
    activeFeedback: 0,
  };

  constructor(props) {
    super(props);
    this.rowRef = createRef();
  }

  handleFeedbackChange(newFeedback) {
    this.rowRef.current.className = 'row fade';
    setTimeout(() => {
      this.setState({ activeFeedback: newFeedback });
    }, 250);
  }

  render() {
    const { feedbacks } = this.props;
    const { activeFeedback } = this.state;

    const feedbacksCount = feedbacks.length;

    const dots = [];
    for (let i = 0; i < feedbacksCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handleFeedbackChange(i)}
            className={i === activeFeedback && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    if (this.rowRef.current) {
      this.rowRef.current.className = 'row fade show';
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <SwipeWrapper
            leftAction={() =>
              this.handleFeedbackChange(
                activeFeedback + 1 < feedbacksCount
                  ? activeFeedback + 1
                  : activeFeedback
              )
            }
            rightAction={() =>
              this.handleFeedbackChange(activeFeedback > 0 ? activeFeedback - 1 : 0)
            }
          >
            <div ref={this.rowRef} className='row fade show'>
              {feedbacks.slice(activeFeedback, activeFeedback + 1).map(feedback => (
                <div key={feedback.id}>
                  <FeedbackBox {...feedback} />
                </div>
              ))}
            </div>
          </SwipeWrapper>
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
