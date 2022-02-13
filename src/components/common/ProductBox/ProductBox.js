import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';

import clsx from 'clsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { toPriceFormat } from '../../../utils/functions';

const Component = ({ className, id, title, image, price, ifQuantity }) => {

  return (
    <div className={clsx(className, styles.root, styles.productBox)}>
      <Row className={clsx(styles.main, styles.mainBox)}>
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
            <Link to={{
              pathname: `/products/${id}`,
            }}
            > Zamów
            </Link>
          </div>

        </Col >
      </Row >
    </div >
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  ifQuantity: PropTypes.bool,
};

export {
  Component as ProductBox,
  Component as ProductBoxComponent,
};
