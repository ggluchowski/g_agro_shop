import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

import clsx from 'clsx';
import { TopBar } from '../../features/TopBar/TopBar';
import { MenuBar } from '../../features/MenuBar/MenuBar';
import { Hero } from '../../features/Hero/Hero';

const Component = ({ className }) => (
  <header className={clsx(className, styles.root)}>
    <TopBar />
    <MenuBar />
    <Hero
      quote='Nie można dobrze myśleć, kochać i dobrze spać, jeśli nie jadło się dobrze.'
      author='--Virginia Woolf'
    />
  </header>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
