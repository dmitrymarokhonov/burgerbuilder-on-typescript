import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import { IReducerState, IReducerIngredientPrices } from "../../interfaces";

const initialState: IReducerState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES: IReducerIngredientPrices = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 1.7
};

export default function BBReducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const updatedIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
      };
      const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
      const updatedState = {
        ...state,
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
      return updateObject(state, updatedState);
    case actionTypes.REMOVE_INGREDIENT:
      const updatedIng = {
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      };
      const updatedIngs = updateObject(state.ingredients, updatedIng);
      const updState = {
        ...state,
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
      return updateObject(state, updState);
    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        error: false,
        totalPrice: initialState.totalPrice
      });
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
}
