import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };

    case actionTypes.GET_PRODUCTS_FAILURE:
      return { error: action.payload };

    default:
      return state;
  }
};
