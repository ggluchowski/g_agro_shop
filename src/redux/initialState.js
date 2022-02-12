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
      // {
      //   _id: '1',
      //   name: 'Marchew',
      //   price: 4.50,
      //   quantity: 1,
      //   sum: 4.50,
      // },
    ],
  },
  paymentMethods:{
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  agreements:{
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  deliverys:{
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },

};
