export const initialState = {
  products: {
    data: [],
    loading: {
      active: true,
      error: false,
    },
  },
  basket: {
    data: [
      {
        id: '1',
        name: 'Marchew',
        price: 4.50,
        quantity: 1,
        sum: 4.50,
      },
    ],
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
