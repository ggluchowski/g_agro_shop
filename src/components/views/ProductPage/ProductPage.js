import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ObjectId from 'mongo-objectid';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Container as ContainerBoot } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

import { toPriceFormat } from '../../../utils/functions';
import { Button } from '../../common/Button/Button';

import { connect } from 'react-redux';
import { getAllProducts, getRequest, fetchProductIDFromDB } from '../../../redux/productsRedux.js';
import { postProductToLocalStorage } from '../../../redux/basketRedux';

class Component extends React.Component {

  state = {
    name: '',
    price: 0,
    quantity: 1,
  }

  componentDidMount() {
    const { fetchData, match } = this.props;
    fetchData(match.params.id);
  }

  handleChange = (event) => {
    this.setState({ quantity: event.target.value });
  }

  handleStart = (props) => {
    this.setState({
      name: props.getProduct[0].name,
      price: props.getProduct[0].price,
    });
  }

  sendToState = () => {
    const { productToLocalStorage } = this.props;
    const { name, price, quantity } = this.state;
    const sum = parseInt(quantity) * parseFloat(price);
    const id = new ObjectId();
    const _id = id.toString();
    const product = {};

    product._id = _id;
    product.name = name;
    product.price = price;
    product.quantity = quantity;
    product.sum = sum;

    productToLocalStorage(product);
  }

  render() {
    const { className, getProduct, getStatusBar } = this.props;
    const product = getProduct[0];

    if (getStatusBar.active) return (
      <ContainerBoot>
        <ProgressBar animated now={60} />
      </ContainerBoot>
    );
    else if (getStatusBar.error) return (
      <ContainerBoot>
        <Alert variant='danger'>
          {getStatusBar.error}
        </Alert>;
      </ContainerBoot>);
    else if (!getStatusBar.active) return (
      <div className={clsx(className, styles.root, styles.productPage)}>
        <ContainerBoot >
          <Row className={styles.main}>

            <div className={styles.buttonProduct}>
              <Link to='/'>
                <Button>
                  <FontAwesomeIcon
                    className={styles.fontLeft}
                    icon={faChevronLeft} />
                  Powrót
                </Button>
              </Link>
            </div>

            <h2>{product.name}</h2>
            <h4>Cena:
              {product.ifQuantity ?
                (<div>
                  <span className={styles.price}>{toPriceFormat(product.price)}/</span>
                  <span className={styles.amount}>szt.</span>
                </div>) :
                (<div>
                  <span className={styles.price}>{toPriceFormat(product.price)}/</span>
                  <span className={styles.amount}>kg</span>
                </div>)
              }
            </h4>
            <div className={styles.addToBasket}>
              <img src={product.images[0]} alt={product.name} onLoad={() => this.handleStart(this.props)} />
              <input
                type='number'
                max={10}
                min={1}
                value={this.state.quantity}
                onChange={this.handleChange}
              />

              <Button onClick={this.sendToState}
                className={styles.button}>
                Dodaj do koszyka
              </Button>

            </div>

            <p className={styles.description}>{product.description}</p>
            <div className={styles.galery}>
              {product.images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={styles.productImage}>
                    <img
                      src={item}
                      alt={product.name} />
                  </div>
                );
              })}
            </div>


          </Row>

        </ContainerBoot>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  fetchData: PropTypes.func,
  productToLocalStorage: PropTypes.func,
  getProduct: PropTypes.array,
  getStatusBar: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  getProduct: getAllProducts(state),
  getStatusBar: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: id => dispatch(fetchProductIDFromDB(id)),
  productToLocalStorage: (product) => dispatch(postProductToLocalStorage(product)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ProductPage,
  Component as ProductPageComponent,
};
