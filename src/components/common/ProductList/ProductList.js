import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

import clsx from 'clsx';

import utils from '../../../utils/functions';

const Component = ({ className, name, quantity, price, sum, description }) => (
  <div className={clsx(className, styles.root, styles.productList)}>

    <div className={styles.name}>{name}</div>
    <div className={styles.quantity}>{quantity}</div>
    <div className={styles.price}>{utils.pricePrint(price)}</div>
    <div className={styles.description}>{description}</div>


  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  sum: PropTypes.number,
  description: PropTypes.string,
};

export {
  Component as ProductList,
  Component as ProductListComponent,
};
