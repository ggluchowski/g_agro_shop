import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { createTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { loadLocalStore } from './redux/basketRedux';

import './styles/bootstrap.scss';
import './styles/global.scss';

// komponenty
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { ProductPage } from './components/views/ProductPage/ProductPage';
import { Basket } from './components/views/Basket/Basket';
import { Order } from './components/views/Order/Order';

import { NotFound } from './components/views/NotFound/NotFound';

const theme = createTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

class App extends React.Component {

  componentDidMount() {
    const { getLocalStore } = this.props;
    getLocalStore();
  }

  render() {
    return (
      // <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/products/:id' component={ProductPage} />
                <Route exact path='/cart' component={Basket} />
                <Route exact path='/order' component={Order} />

                <Route path='*' component={NotFound} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
      // </Provider>
    );
  }
}

App.propTypes = {
  getLocalStore: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  getLocalStore: () => dispatch(loadLocalStore()),
});

const AppContainer = connect(null, mapDispatchToProps)(App);


export {
  App,
  AppContainer,
};
