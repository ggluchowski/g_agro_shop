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
