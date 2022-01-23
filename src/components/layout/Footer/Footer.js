import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <footer>
      <div className={styles.footerTop}>
        <Container>
          <Row>
            <Col>
              <div className={styles.title}>informacje</div>
              <div className={styles.footerLinks}>
                <div><Link to='/'>O nas</Link></div>
                <div><Link to='/'>Polityka prywatności</Link></div>
                <div><Link to='/'>Wsparcie online</Link></div>
              </div>
            </Col>
            <Col>
              <div className={styles.title}>moje konto</div>
              <div className={styles.footerLinks}>
                <div><Link to='/'>Login</Link></div>
                <div><Link to='/'>Mój koszyk</Link></div>
                <div><Link to='/'>Lista życzeń</Link></div>
              </div>
            </Col>
            <Col>
              <div className={styles.title}>zamówienia</div>
              <div className={styles.footerLinks}>
                <div><Link to='/'>Opcje zapłaty</Link></div>
                <div><Link to='/'>Opcje wysyłki i dostawy</Link></div>
                <div><Link to='/'>Zwroty</Link></div>
                <img
                  className={styles.supportedPayments}
                  src='/images/cards.png'
                  alt='Supported credit cards'
                />
              </div>
            </Col>
            <Col>
              <div className={styles.title}>social media</div>
              <div className={styles.footerLinks}>
                <div >
                  <a href='https://twitter.com' className={styles.social}>
                    <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                  </a>
                </div>
                <div>
                  <a href='https://www.facebook.com' className={styles.social}>
                    <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                  </a>
                </div>
                <div>
                  <a href='https://www.youtube.com' className={styles.social}>
                    <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                  </a>
                </div>
                <div>
                  <a href='https://pl.pinterest.com' className={styles.social}>
                    <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.footerBottom}>
        <Container>
          <Row>
            <Col className={styles.text}>
              ©Copyright 2022 AGROshop | All Rights Reserved
            </Col>
          </Row>
        </Container>
      </div>

    </footer>

  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
