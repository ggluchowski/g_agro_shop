import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';

import clsx from 'clsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, title, image, price, ifQuantity }) => {

  function toPriceFormat(price) {
    if (isNaN(price)) {
      return '';
    } else {
      return price.toLocaleString('en', {
        style: 'currency',
        currency: 'PLN',
        minimumFractionDigits: '2',
        maxFractionDigits: '2',
      });
    }
  }

  return (
    <div className={clsx(className, styles.root, styles.productBox)}>
      <Row className={styles.main}>
        <Col className={styles.image}>
          <img src={image} alt='Zdjecie warzywa/owocu' />
        </Col>
        <Col className={styles.info}>
          <div className={styles.text}>
            <div>{title}</div>
            <div>Cena:</div>
          </div>
          {ifQuantity ?
            (<div>
              <span className={styles.price}>{toPriceFormat(price)}/</span>
              <span className={styles.amount}>szt.</span>
            </div>) :
            (<div>
              <span className={styles.price}>{toPriceFormat(price)}/</span>
              <span className={styles.amount}>kg</span>
            </div>)
          }
          <div className={styles.order}>
            <Link to='/product/:id' >Zamów</Link>
          </div>

        </Col >
      </Row >
    </div >
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  ifQuantity: PropTypes.bool,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};
