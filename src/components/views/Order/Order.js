import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './Order.module.scss';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Container as ContainerBoot } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import { Button } from '../../common/Button/Button';

import { connect } from 'react-redux';

import { ProductList } from '../../common/ProductList/ProductList';
import utils from '../../../utils/functions';

import { getAllPaymentMethods, fetchPaymentMethodsFromDB } from '../../../redux/paymentMethodsRedux';
import { getAllDeliverys, fetchDeliverysFromDB } from '../../../redux/deliverysRedux';
import { getAllAgreements, fetchAgreementsFromDB } from '../../../redux/agreementsRedux';

import { getAll, sumAll } from '../../../redux/basketRedux';

class Component extends React.Component {
  state = {
    delivery: 0,
  }

  componentDidMount() {
    const { fetchPaymentMethods, fetchDeliverys, fetchAgreements } = this.props;

    fetchPaymentMethods();
    fetchDeliverys();
    fetchAgreements();

  }

  handleDeliveryChange = (price) => {
    this.setState({
      delivery: price,
    });
  }

  orderSummary = (delivery, product) => {
    return parseFloat(delivery) + parseFloat(product);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    for (let i = 0; i < e.target.length; i++) {
      let item = e.currentTarget;
      if (item[i].type === 'radio' && item[i].checked) console.log(item[i].defaultValue);
      else if (item[i].type === 'checkbox' && item[i].checked) console.log(item[i].defaultValue);
      else if (item[i].type === 'text') console.log(item[i].value);
      else if (item[i].type === 'email') console.log(item[i].value);
      // console.log(e.currentTarget[i]);
      // console.log(item[i].type, item[i].name, item[i].value, item[i].label, item[i].checked );
    }


    console.log('Kliknieto submit');
  }

  render() {
    const { className, getBasket, basketSum, getAgreements, getPaymentMethods, getDeliverys } = this.props;
    return (
      <div className={clsx(className, styles.root, styles.order)}>
        <ContainerBoot>
          <Row className={styles.main}>
            <div className={styles.choiceButtons}>
              <Link to='/'>
                <Button>
                  <FontAwesomeIcon
                    className={styles.fontLeft}
                    icon={faChevronLeft} />
                  Kontynuuj zakupy
                </Button>
              </Link>
            </div>
            <h3>Podsumowanie zakupów</h3>
            {/* kolumna lewa */}
            <Col className={styles.summaryCol}>

              <Form onSubmit={(e) => this.handleSubmit(e)}>
                <div className={styles.formHead}>
                  Metoda płatności
                </div>

                <div>
                  {getPaymentMethods.map((item) => (
                    <div key={item._id} className="mb-2">
                      <Form.Check
                        type='radio'
                        id={`radio-${item._id}`}
                        label={item.name}
                        name='payment'
                        defaultValue={item.name}
                        required
                      />
                    </div>
                  ))}

                </div>

                <div className={styles.formHead}>
                  Rodzaj dostawy
                </div>

                <div>
                  {getDeliverys.map((item) => (
                    <div key={item._id} className="mb-2">
                      <Form.Check
                        onChange={() => this.handleDeliveryChange(item.price)}
                        type='radio'
                        id={`radio-${item._id}`}
                        label={item.name}
                        name='delivery'
                        defaultValue={item.name}
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className={styles.formHead}>
                  Dane Odbiorcy
                </div>

                <Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email<span className={styles.asterisk}>*</span></Form.Label>
                    <Form.Control type="email" placeholder="Podaj adres e-mail" name="email" required />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridCompanyName">
                    <Form.Label>Nazwa firmy</Form.Label>
                    <Form.Control placeholder="Podaj nazwę firmy" name="companyName" />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Imię<span className={styles.asterisk}>*</span></Form.Label>
                    <Form.Control placeholder="Podaj imię" name="firstName" required />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Nazwisko<span className={styles.asterisk}>*</span></Form.Label>
                    <Form.Control placeholder="Podaj nazwisko" name="lastName" required />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Miasto<span className={styles.asterisk}>*</span></Form.Label>
                    <Form.Control placeholder="Podaj miasto" name="city" required />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPostcode">
                    <Form.Label>Kod pocztowy<span className={styles.asterisk}>*</span></Form.Label>
                    <Form.Control placeholder="00-000" name="postcode" required />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="formGridStreet">
                    <Form.Label>Ulica, nr domu/nr lokalu<span className={styles.asterisk}>*</span></Form.Label>
                    <Form.Control placeholder="Podaj ulicę, nr bud/nr lok" name="streetAndHomeNumber" required />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPhone" className={styles.phone}>
                    <Form.Label>Telefon</Form.Label>
                    <Form.Control placeholder="Podaj numer telefonu" name="phone" />
                  </Form.Group>
                </Row>

                <div className={styles.agreements}>
                  <Form.Group
                  // required
                  // feedback="You must agree before submitting."
                  // feedbackType="invalid"
                  >
                    {getAgreements.map((item) => (
                      <div key={item._id} className="mb-2">
                        <Form.Check
                          type='checkbox'
                          id={item._id}
                          label={ReactHtmlParser(item.name)}
                          required={item.required}
                          name='agreements'
                        />
                      </div>
                    ))}
                  </Form.Group>
                </div>

                <div className={styles.button}>
                  <Button type="submit">
                    Zamów i zapłać
                  </Button>
                </div>

              </Form>

            </Col>

            {/* kolumna prawa */}
            <Col className={styles.summaryCol}>
              <div className={styles.formHead}>
                Lista zamawianych produktów
              </div>

              <div className={styles.summary_tabHead}>
                <div className={styles.name}>Nazwa</div>
                <div className={styles.quantity}>Ilość</div>
                <div className={styles.price}>Cena jed.</div>
                <div className={styles.description}>Opis</div>
              </div>

              {getBasket.map(item =>
                <ProductList
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={parseInt(item.quantity)}
                  sum={item.sum}
                  description={item.description}
                />
              )}
              <div className={styles.summaryPrice}>
                <div className={styles.summaryPrice_content}>
                  <div>Cena produktów:</div>
                  <div className={styles.summaryPrice_price}>{ basketSum } zł</div>
                </div>

                <div className={styles.summaryPrice_content}>
                  <div>Cena dostawy:</div>
                  <div className={styles.summaryPrice_price}>{utils.pricePrint(this.state.delivery)} zł</div>
                </div>

                <div className={clsx(styles.summaryPrice_content, styles.summaryPrice_sum)}>
                  <div>SUMA:</div>
                  <div className={styles.summaryPrice_price}> {utils.pricePrint(this.orderSummary(this.state.delivery, basketSum))} zł</div>
                </div>

              </div>

            </Col>


          </Row>
        </ContainerBoot>




      </div >
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  getBasket: PropTypes.array,
  basketSum: PropTypes.string,
  getPaymentMethods: PropTypes.array,
  getDeliverys: PropTypes.array,
  getAgreements: PropTypes.array,
  fetchPaymentMethods: PropTypes.func,
  fetchDeliverys: PropTypes.func,
  fetchAgreements: PropTypes.func,
};

const mapStateToProps = state => ({
  getBasket: getAll(state),
  basketSum: sumAll(state),
  getPaymentMethods: getAllPaymentMethods(state),
  getDeliverys: getAllDeliverys(state),
  getAgreements: getAllAgreements(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPaymentMethods: () => dispatch(fetchPaymentMethodsFromDB()),
  fetchDeliverys: () => dispatch(fetchDeliverysFromDB()),
  fetchAgreements: () => dispatch(fetchAgreementsFromDB()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Order,
  Container as Order,
  Component as OrderComponent,
};
