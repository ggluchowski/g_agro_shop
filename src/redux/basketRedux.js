// import Axios from 'axios';

/* selectors */
export const getAll = ({ basket }) => basket.data;
export const sumAll = ({ basket }) => {
  const data = basket.data;
  let sum = 0;
  for (const item of data) {

    sum += item.sum;
  }
  return sum.toFixed(2);
};

/* action name creator */
const reducerName = 'basket';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_BASKET = createActionName('ADD_TO_BASKET');
const UPDATE_BASKET = createActionName('UPDATE_BASKET');
const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');
const ADD_DESCRIPTION = createActionName('ADD_DESCRIPTION');
const CLEAR_BASKET = createActionName('CLEAR_BASKET');

/* action creators */
export const actionAddToBasket = (id, name, price, quantity, sum) => ({
  payload: {
    id: id,
    name: name,
    price: price,
    quantity: quantity,
    sum: sum,
  },
  type: ADD_TO_BASKET,
});

export const actionUpdateBasket = (id, newQuantity) => ({
  payload: {
    id: id,
    quantity: newQuantity,
  },
  type: UPDATE_BASKET,
});

export const actionDeleteProduct = (id) => ({
  payload: {
    id: id,
  },
  type: DELETE_PRODUCT,
});

export const actionAddDescription = (id, newDescription) => ({
  payload: {
    id: id,
    description: newDescription,
  },
  type: ADD_DESCRIPTION,
});

export const actionClearBasket = payload => ({ payload, type: CLEAR_BASKET });


/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...statePart,
        data: [
          ...statePart.data,
          action.payload,
        ],
      };

    case UPDATE_BASKET:
      statePart.data.map(product => {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.quantity;
          product.sum = parseInt(action.payload.quantity) * parseFloat(product.price);
        }
        return product;
      });
      return {
        ...statePart,
      };

    case DELETE_PRODUCT:
      for (const product of statePart.data) {
        if (product.id === action.payload.id)
          statePart.data.splice(statePart.data.indexOf(product), 1);
      }
      return {
        ...statePart,
      };

    case ADD_DESCRIPTION:
      statePart.data.map(product => {
        if (product.id === action.payload.id) {
          product.description = action.payload.description;
        }
        return product;
      });
      return {
        ...statePart,
      };

    case CLEAR_BASKET:
      return {
        data: [],
      };

    default:
      return statePart;
  }
};
