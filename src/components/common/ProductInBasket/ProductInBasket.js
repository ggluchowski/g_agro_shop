import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductInBasket.module.scss';

import clsx from 'clsx';

import { connect } from 'react-redux';

import utils from '../../../utils/functions';

import { actionDeleteProduct, actionUpdateBasket, actionAddDescription } from '../../../redux/basketRedux';

const Component = ({ className, id, name, quantity, price, description, updateProduct, deleteProduct, updateDescription }) => {

  const [count, setCount] = useState(quantity);

  function handleChangeTextarea (event) {
    const text = event.target.value;
    updateDescription(id, text);
  }

  function increase() {
    if (count >= 1 && count < 10)
      setCount(count + 1);

    if (count === 10)
      updateProduct(id, count);
    else
      updateProduct(id, count + 1);
  }

  function decrease() {
    if (count > 1 && count <= 10)
      setCount(count - 1);

    if (count === 1)
      updateProduct(id, count);
    else
      updateProduct(id, count - 1);
  }

  return (
    <div className={clsx(className, styles.root, styles.ProductInBasket)}>

      <div className={clsx(styles.headTable, styles.productTable)}>
        <div className={styles.productName}>
          {name}
        </div>
        <div className={clsx(styles.quantity, styles.quantityChange)}>
          <div
            className={styles.plus_minus}
            onClick={() => decrease(count)}
          >-</div>

          <div className={styles.content}>{count}</div>
          <div
            className={styles.plus_minus}
            onClick={() => increase(count)}
          >+</div>
        </div>
        <div className={styles.price}>
          {utils.pricePrint(price)}
        </div>
        <div className={styles.sum}>
          {utils.pricePrint(utils.sum(count, price))}
        </div>
        <div onClick={() => deleteProduct(id)} className={styles.delete}>
          X
        </div>
      </div>

      <div className={styles.description}>
        <textarea
          rows={1}
          defaultValue={description}
          onChange={(event) => handleChangeTextarea(event)}
          placeholder='Dodaj wymagania odnośnie produktu...'
        ></textarea>
      </div>

    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  sum: PropTypes.number,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  count: PropTypes.number,
  updateProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
  updateDescription: PropTypes.func,
  description: PropTypes.string,
};

const mapStateToProps = state => ({
  // someProp: reduxSelector(state),
});

const mapDispatchToProps = dispatch => ({
  updateProduct: (id, newQuantity) => dispatch(actionUpdateBasket(id, newQuantity)),
  deleteProduct: (id) => dispatch(actionDeleteProduct(id)),
  updateDescription: (id, description) => dispatch(actionAddDescription(id, description)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ProductInBasket,
  Component as ProductInBasketComponent,
};
