import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children, setWindow }) => {
  const handlerResize = () => {
    setWindow(window.innerWidth, window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', handlerResize);
    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  });
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  setWindow: PropTypes.func,
};

export default MainLayout;
