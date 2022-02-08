import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

import clsx from 'clsx';

import utils from '../../../utils/functions';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

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

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductList,
  // Container as ProductList,
  Component as ProductListComponent,
};
