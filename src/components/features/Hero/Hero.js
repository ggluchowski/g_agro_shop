import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss';

import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Component = ({ className, quote, author }) => (
  <div className={clsx(className, styles.root, styles.hero)}>
    <Container>
      <Row>
        <blockquote className={styles.quote}>
          <p>{quote}</p>
          <footer>
            <i>{author}</i>
          </footer>
        </blockquote>
      </Row>
    </Container>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string,
};

export {
  Component as Hero,
  Component as HeroComponent,
};
