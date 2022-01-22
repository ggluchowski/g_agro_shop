import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

import clsx from 'clsx';
import { TopBar } from '../../features/TopBar/TopBar';
import { MenuBar } from '../../features/MenuBar/MenuBar';
import { Hero } from '../../features/Hero/Hero';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => (
  <header className={clsx(className, styles.root)}>
    <TopBar />
    <MenuBar />
    <Hero />
  </header>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
