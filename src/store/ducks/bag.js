import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Actions Creators */
export const { Types, Creators } = createActions({
  addProduct: ['product', 'quantity'],
  removeProduct: ['id'],
  clearBag: [],
});

/* Initial State */
const INITIAL_STATE = Immutable({ products: [] });

/* Reducers */
const addProduct = (state, { product, quantity }) => {
  const exists = state.products.findIndex(
    (element) => element.product._id === product._id
  );

  if (exists === -1) {
    return state.merge({
      products: [...state.products, { product, quantity }],
    });
  }

  const products = [...state.products];
  products[exists] = { product, quantity };

  return state.merge({
    ...state,
    products,
  });
};

const removeProduct = (state, { id }) => {
  let products = [...state.products];

  products = products.filter((element) => element.product._id !== id);

  return state.merge({
    ...state,
    products,
  });
};

const clearBag = (state) => INITIAL_STATE;

/* Reducers to types */
const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: addProduct,
  [Types.REMOVE_PRODUCT]: removeProduct,
  [Types.CLEAR_BAG]: clearBag,
});

export default reducer;
