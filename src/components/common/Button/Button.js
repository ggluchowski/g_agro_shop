import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

import clsx from 'clsx';

const Component = ({ className, children, onClick, type }) => (
  <button
    className={clsx(className, styles.root)}
    onClick={onClick}
    type={type}>

    {children}
  </button>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export {
  Component as Button,
  // Container as Button,
  Component as ButtonComponent,
};
