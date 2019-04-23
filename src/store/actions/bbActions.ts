// import axios from "../../axios-orders";
import axios from "axios"
import * as actionTypes from "./actionTypes";




type IngredientName = string

export const addIngredient = (name:IngredientName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = (name:IngredientName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const setIngredients = (ingredients:any) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const initIngredients = () => {
  return (dispatch:any) => {
    axios
      .get("https://react-my-burger-c539a.firebaseio.com/ingredients.json")
      .then(response => {
        console.log(response);
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};