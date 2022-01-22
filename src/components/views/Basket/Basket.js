import React from 'react';
import PropTypes from 'prop-types';
import styles from './Basket.module.scss';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

class Component extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <h2>Basket</h2>
        {children}
      </div>
    );
  }
}

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
  Component as { {pascalCase name } },
// Container as Basket,
Component as BasketComponent,
};
