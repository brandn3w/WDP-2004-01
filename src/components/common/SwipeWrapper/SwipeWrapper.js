import React from 'react';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-swipeable';

const SwipeWrapper = ({ children, leftAction, rightAction }) => (
  <Swipeable onSwipedLeft={leftAction} onSwipedRight={rightAction}>
    {children}
  </Swipeable>
);

SwipeWrapper.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default SwipeWrapper;
