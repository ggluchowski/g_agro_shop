import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.scss';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root, styles.notFound)}>
    <div>
      <h1 className={styles.head}>404</h1>
      <h1 className={styles.text}>Page not found</h1>
      <NavLink to='/'>Go to Homepage</NavLink>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
