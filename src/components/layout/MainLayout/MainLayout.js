import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';

import clsx from 'clsx';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';


//do usuniecia
import { ProductBox } from '../../common/ProductBox/ProductBox';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    <h2>MainLayout</h2>{children}
    <ProductBox image='/images/KAPUSTA-MLODA-POLSKA-SZT_[1610]_1200.jpg' title='Kapusta' price={10.00} ifQuantity={false}/>
    <Footer />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
