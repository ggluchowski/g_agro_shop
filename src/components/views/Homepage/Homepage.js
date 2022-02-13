import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';

import clsx from 'clsx';

import { Products } from '../../features/Products/Products';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Products />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Homepage,
  Component as HomepageComponent,
};
