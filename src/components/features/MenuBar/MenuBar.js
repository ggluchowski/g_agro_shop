import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuBar.module.scss';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck, faAddressCard, faHome, faPhoneVolume, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      <nav className={styles.navMenuContainer}>
        <NavLink to='/' activeClassName='active' className={styles.menuLink}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faHome} />
          <div>Home</div>

        </NavLink>
        <NavLink to='/about'>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faAddressCard} />
          <div>O nas</div>
        </NavLink>
        <NavLink to='/contact'>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faPhoneVolume} />
          <div>Kontakt</div>
        </NavLink>
        <NavLink to='/order'>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faMoneyCheck} />
          <div>Zamówienie</div>
        </NavLink>
        <NavLink to='/cart'
        // to={{
        //   pathname: `/${loggedUser}`,
        //   state: userBulletinFilter,
        // }}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={faShoppingCart} />
          <div>Koszyk</div>
        </NavLink>
      </nav>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MenuBar,
  // Container as MenuBar,
  Component as MenuBarComponent,
};
