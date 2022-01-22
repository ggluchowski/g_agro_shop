import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopBar.module.scss';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../common/Button/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src='/images/agroshop-logo.jpg' alt='AGROshop - logo'></img>
      </div>
      <div className={styles.contact}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon className={styles.icon} icon={faPhone} />
        </div>
        <div className={styles.contactText}>
          Kontakt do nas: <br />
          <b>663-124-256</b>
        </div>

      </div>
      <div className={styles.contact}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
        </div>
        <div className={styles.contactText}>
          Lokalizacja:<br />
          <b>ul. Warzywka 7 <br />
            Owocogród</b>
        </div>
      </div>
      <div className={styles.button}>
        <Button>Kontakt do nas</Button>
      </div>
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
  Component as TopBar,
  // Container as TopBar,
  Component as TopBarComponent,
};
