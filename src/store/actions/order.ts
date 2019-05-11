import * as actionTypes from "./actionTypes";
import axios from "axios";

import { Dispatch } from "redux";

export const purchaseBurgerSuccess = (id: number, orderData: any) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = (error: string) => {
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

export const purchaseBurger = (orderData: any) => {
  return (dispatch: any) => {
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

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = (orders: Array<Object>) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = (error: string) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = () => {
  return (dispatch: Dispatch) => {

    dispatch(fetchOrdersStart());

    // fetch("https://react-my-burger-c539a.firebaseio.com/orders.json")
    //   .then(results => {
    //     return results.json();
    //   })
    //   .then(data => {
    //     const fetchedOrders = [];
    //     console.log(data);
    //     for (const key in data) {
    //       fetchedOrders.push({
    //         ...data[key],
    //         id: key
    //       });
    //     }
    //     dispatch(fetchOrdersSuccess(fetchedOrders));
    //   }).catch(err => fetchOrdersFail(err));
    axios
      .get("https://react-my-burger-c539a.firebaseio.com/orders.json")
      .then(res => {
        console.log(res.data);
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => fetchOrdersFail(err));
  };
};
