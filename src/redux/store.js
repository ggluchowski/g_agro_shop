import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';
import { reducer as productsReducer } from './productsRedux';
import { reducer as basketReducer } from './basketRedux';
import { reducer as paymentMethodsReducer } from './paymentMethodsRedux';
import { reducer as agreementsReducer } from './agreementsRedux';
import { reducer as deliverysReducer } from './deliverysRedux';
import { reducer as contactsReducer } from './contactsRedux';
import { reducer as orderedProductsReducer } from './contactsRedux';


// define reducers
const reducers = {
  products: productsReducer,
  basket: basketReducer,
  paymentMethods: paymentMethodsReducer,
  agreements: agreementsReducer,
  deliverys: deliverysReducer,
  contacts: contactsReducer,
  orderedProducts: orderedProductsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
