import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuBar.module.scss';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck, faAddressCard, faHome, faPhoneVolume, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Container>
      <Row>
        <nav className={styles.navMenuContainer}>
          <Col>
            <NavLink to='/' activeClassName='active'>
              <FontAwesomeIcon
                icon={faHome} />
              <div>Home</div>
            </NavLink>
          </Col>
          <Col>
            <NavLink to='/about'>
              <FontAwesomeIcon
                icon={faAddressCard} />
              <div>O nas</div>
            </NavLink>
          </Col>
          <Col>
            <NavLink to='/contact'>
              <FontAwesomeIcon
                icon={faPhoneVolume} />
              <div>Kontakt</div>
            </NavLink>
          </Col>
          <Col>
            <NavLink to='/order'>
              <FontAwesomeIcon
                icon={faMoneyCheck} />
              <div>Zamówienie</div>
            </NavLink>
          </Col>
          <Col>
            <NavLink to='/cart'>
              <FontAwesomeIcon
                icon={faShoppingCart} />
              <div>Koszyk</div>
            </NavLink>
          </Col>
        </nav>
      </Row>
    </Container>
  </div >
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MenuBar,
  // Container as MenuBar,
  Component as MenuBarComponent,
};
