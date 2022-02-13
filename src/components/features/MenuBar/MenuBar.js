import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuBar.module.scss';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck, faAddressCard, faHome, faPhoneVolume, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Container as ContainerBoot } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { connect } from 'react-redux';

import { countProduct } from '../../../redux/basketRedux';

const Component = ({ className, count }) => (
  <div className={clsx(className, styles.root, styles.menuBar)}>
    <ContainerBoot>
      <Row>
        <nav className={styles.navMenuContainer}>
          <Col>
            <NavLink to='/' activeClassName='active'>
              <FontAwesomeIcon
                icon={faHome} />
              <div className={styles.text}>Home</div>
            </NavLink>
          </Col>
          <Col>
            <NavLink to='/about'>
              <FontAwesomeIcon
                icon={faAddressCard} />
              <div className={styles.text}>O nas</div>
            </NavLink>
          </Col>
          <Col>
            <NavLink to='/contact'>
              <FontAwesomeIcon
                icon={faPhoneVolume} />
              <div className={styles.text}>Kontakt</div>
            </NavLink>
          </Col>
          <Col>
            <NavLink to='/order'>
              <FontAwesomeIcon
                icon={faMoneyCheck} />
              <div className={styles.text}>Zamówienie</div>
            </NavLink>
          </Col>
          <Col>
            <NavLink to='/cart'>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon
                  icon={faShoppingCart} />
                {
                  count >= 1 &&
                  <div className={styles.productCounter}>
                    <div className={styles.text}>{count}
                    </div>
                  </div>
                }
              </div>

              <div className={styles.text}>Koszyk</div>
            </NavLink>
          </Col>
        </nav>
      </Row>
    </ContainerBoot>
  </div >
);

const mapStateToProps = state => ({
  count: countProduct(state),
});

Component.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
};
const Container = connect(mapStateToProps)(Component);

export {
  Container as MenuBar,
  Component as MenuBarComponent,
};
