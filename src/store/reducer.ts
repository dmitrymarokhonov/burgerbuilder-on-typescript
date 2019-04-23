import * as actionTypes from "./actions/actionTypes";
import { IReducerInitialState, IReducerPrices } from "../interfaces";

const initialState: IReducerInitialState = {
  ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
  totalPrice: 4
};

const INGREDIENT_PRICES: IReducerPrices = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 1.7
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    default:
      return state;
  }
}
