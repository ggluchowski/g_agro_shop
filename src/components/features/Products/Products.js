import React from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.scss';

import clsx from 'clsx';
import { Container as ContainerBoot } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ProductBox } from '../../common/ProductBox/ProductBox';
import { connect } from 'react-redux';
import { getAllProducts, fetchProductsFromDB } from '../../../redux/productsRedux.js';

class Component extends React.Component {

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { className, getDataProducts } = this.props;

    return (
      <div className={clsx(className, styles.root, styles.products)}>
        <ContainerBoot>
          <Row>
            <h1>Nasze produkty</h1>
          </Row>
          <Row md={2}>
            {getDataProducts.map(item => {
              return (
                <Col className='col-12' key={item._id}>
                  <ProductBox
                    image={item.images[0]}
                    title={item.name}
                    price={item.price}
                    ifQuantity={item.ifQuantity}
                    id={item._id}
                  />
                </Col>
              );
            })}
          </Row>
        </ContainerBoot>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fetchData: PropTypes.func,
  getDataProducts: PropTypes.array,
};

const mapStateToProps = state => ({
  getDataProducts: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchProductsFromDB()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Products,
  Container as Products,
  Component as ProductsComponent,
};
