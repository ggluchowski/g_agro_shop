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
export const countProduct = ({ basket }) => {
  const count = basket.data.length;
  return count;
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
const GET_BASKET = createActionName('GET_BASKET');
// const BASKET_TO_LOCAL = createActionName('BASKET_TO_LOCAL');

/* action creators */
export const actionAddToBasket = (id, name, price, quantity, sum) => ({
  payload: {
    _id: id,
    name: name,
    price: price,
    quantity: quantity,
    sum: sum,
  },
  type: ADD_TO_BASKET,
});

export const actionUpdateBasket = (id, newQuantity) => ({
  payload: {
    _id: id,
    quantity: newQuantity,
  },
  type: UPDATE_BASKET,
});

export const actionDeleteProduct = (id) => ({
  payload: {
    _id: id,
  },
  type: DELETE_PRODUCT,
});

export const actionAddDescription = (id, newDescription) => ({
  payload: {
    _id: id,
    description: newDescription,
  },
  type: ADD_DESCRIPTION,
});

export const actionClearBasket = payload => ({ payload, type: CLEAR_BASKET });

export const actionGetBasket = payload => ({ payload, type: GET_BASKET });

/* thunk creators */

export const postProductToLocalStorage = (product) => {
  return async (dispatch) => {
    try {
      const basket = JSON.parse(localStorage.getItem('basket')) || [];
      basket.push(product);
      localStorage.setItem('basket', JSON.stringify(basket));

      dispatch(actionAddToBasket(product._id, product.name, product.price, product.quantity, product.sum));

    } catch (e) {
      console.error(e);
    }
  };
};

export const loadLocalStore = () => {
  return async (dispatch) => {
    try {
      const basket = JSON.parse(localStorage.getItem('basket')) || [];
      dispatch(actionGetBasket(basket));

    } catch (e) {
      console.error(e);
    }
  };
};
export const updateLocalStorage = (id, type, value) => {
  return async () => {
    try {
      const basket = JSON.parse(localStorage.getItem('basket')) || [];
      basket.map((item) => {
        if (item._id === id) {
          if (type === 'quantity') item.quantity = value;
          if (type === 'description') item.description = value;
        }
        return item;
      });

      localStorage.setItem('basket', JSON.stringify(basket));
    } catch (e) {
      console.error(e);
    }
  };
};

export const deleteProductLocalStorage = (id) => {
  return async (dispatch) => {
    try {
      const basket = JSON.parse(localStorage.getItem('basket')) || [];
      let index = '';

      for (const item of basket) {
        if (item._id === id)
          index = basket.indexOf(item);
      }
      basket.splice(index, 1);
      localStorage.setItem('basket', JSON.stringify(basket));
      dispatch(actionDeleteProduct(id));
    } catch (e) {
      console.error(e);
    }
  };
};

export const deleteBasketLocalStorage = () => {
  return async () => {
    try {
      localStorage.removeItem('basket');
    } catch (e) {
      console.error(e);
    }
  };
};

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
        if (product._id === action.payload._id) {
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
        if (product._id === action.payload._id)
          statePart.data.splice(statePart.data.indexOf(product), 1);
      }
      return {
        ...statePart,
      };

    case ADD_DESCRIPTION:
      statePart.data.map(product => {
        if (product._id === action.payload._id) {
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

    case GET_BASKET:
      return {
        data: action.payload,
      };

    default:
      return statePart;
  }
};
