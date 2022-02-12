import Axios from 'axios';

/* selectors */

/* action name creator */
const reducerName = 'orderedProducts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const postOrderedProductToDB = (productTab) => {
  return (dispatch) => {
    dispatch(fetchStarted());

    Axios
      .post('http://localhost:8000/api/orderedProducts', productTab)
      .then(res => {
        console.log(productTab);
        dispatch(fetchSuccess(productTab));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };

    case FETCH_SUCCESS:
      return {

        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };

    case FETCH_ERROR:
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };

    default:
      return statePart;
  }
};
