import React from 'react';
import PropTypes from 'prop-types';
import styles from './Basket.module.scss';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Container as ContainerBoot } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { ProductInBasket } from '../../common/ProductInBasket/ProductInBasket';
import { Button } from '../../common/Button/Button';

import { getAll, sumAll } from '../../../redux/basketRedux';


class Component extends React.Component {

  render() {
    const { className, getProducts, getSum } = this.props;
    return (
      <div className={clsx(className, styles.root, styles.basket)}>
        <ContainerBoot>
          <Row className={styles.main}>
            <div className={styles.headTable}>
              <div className={styles.productName}>
                Nazwa produktu
              </div>
              <div className={styles.quantity}>
                Ilość
              </div>
              <div className={styles.price}>
                Cena
              </div>
              <div className={styles.sum}>
                Suma
              </div>
              <div className={styles.delete}>
                Usuń
              </div>
            </div>

            {getProducts.map((item, index) =>
              <ProductInBasket
                key={index}
                id={item.id}
                name={item.name}
                quantity={parseInt(item.quantity)}
                price={parseFloat(item.price)}
                description={item.description}
              />)}

            <div className={clsx(styles.summaryPrice, styles.summaryPriceText)}>
              Razem do zapłaty:
            </div>
            <div className={styles.summaryPrice}>
              {getSum} zł
            </div>

            <div className={styles.choiceButtons}>
              <Link to='/'>
                <Button>
                  <FontAwesomeIcon
                    className={styles.fontLeft}
                    icon={faChevronLeft} />
                  Kontynuuj zakupy
                </Button>
              </Link>
              <Link to='/order'>
                <Button>
                  Zamów
                  <FontAwesomeIcon
                    className={styles.fontRight}
                    icon={faChevronRight} />
                </Button>
              </Link>
            </div>
          </Row>

        </ContainerBoot>

      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  getProducts: PropTypes.array,
  getSum: PropTypes.string,
};

const mapStateToProps = state => ({
  getProducts: getAll(state),
  getSum: sumAll(state),
});

const mapDispatchToProps = dispatch => ({

});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Basket,
  Container as Basket,
  Component as BasketComponent,
};
