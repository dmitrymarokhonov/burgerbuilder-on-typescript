import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id:number, orderData:any) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = (error:any) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = (orderData:any) => {
  return (dispatch:any) => {
      dispatch(purchaseBurgerStart());
    axios
      .post("https://react-my-burger-c539a.firebaseio.com/orders.json", orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data, orderData));
      })
      .catch(err => {
        dispatch(purchaseBurgerFail(err));
      });
  };
};
