// import Axios from 'axios';

/* selectors */
export const getAll = ({ basket }) => basket;

/* action name creator */
const reducerName = 'basket';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_BASKET = createActionName('ADD_TO_BASKET');

/* action creators */
export const actionAddToBasket = (name, price, quantity) => ({
  payload: {
    name: name,
    price: price,
    quantity: quantity,
  },
  type: ADD_TO_BASKET,
});

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

    default:
      return statePart;
  }
};
