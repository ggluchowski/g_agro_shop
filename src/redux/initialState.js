export const initialState = {
  products: {
    data: [],
    loading: {
      active: true,
      error: false,
    },
  },
  basket: {
    data: [],
  },
  orders: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
