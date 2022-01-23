import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopBar.module.scss';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Button } from '../../common/Button/Button';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Container>
      <Row className={styles.align}>
        <Col md={3}>
          <div className={styles.logo}>
            <img src='/images/agroshop-logo.jpg' alt='AGROshop - logo'></img>
          </div>
        </Col>
        <Col md={3} >
          <div className={styles.contact}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon className={styles.icon} icon={faPhone} />
            </div>
            <div className={styles.contactText}>
              Kontakt do nas: <br />
              <b>663-124-256</b>
            </div>
          </div>
        </Col>
        <Col md={3} >
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
        </Col>
        <Col md={3}>
          <div className={styles.button}>
            <Button>Kontakt do nas</Button>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as TopBar,
  // Container as TopBar,
  Component as TopBarComponent,
};
