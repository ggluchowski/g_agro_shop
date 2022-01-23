import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';

import clsx from 'clsx';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    <h2>MainLayout</h2>{children}
    <Footer />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
