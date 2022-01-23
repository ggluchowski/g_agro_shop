import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

import clsx from 'clsx';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Button,
  // Container as Button,
  Component as ButtonComponent,
};
