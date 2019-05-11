import { History } from 'history';
import { privateEncrypt } from "crypto";

export interface ILayoutState {
  showSideDrawer?: boolean
}

export interface IModalProps {
  show: boolean
  modalClosed: boolean
}

export interface IBurgerIngedientProps {
  type: string
}

interface IBuildControl {
  label: string
  type: string
}

export interface IBuildControls extends Array<IBuildControl>{}

export interface IOrderSummaryProps {
  ingredients: any
  purchaseCancelled: any
  purchaseContinued: any
  price: number
}

export interface IBurgerBuilderState {
  purchasing: boolean
}

export interface IBurgerBuilderProps {
  ings: any 
  price: any
  error: any
  onIngredientAdded: any
  onIngredientRemoved: any
  onInitIngredients: any
  onInitPurchase: any
  history: History
}

export interface IContactDataProps {
  ings: any
  price: any
  loading: any,
  onOrderBurger: any
  history: History
}

interface IDeliveryMethodOptions {
  value: string
  displayValue: string
}

export interface IContactDataState {
  orderForm: any | {
    name: {
      elementType: string
      elementConfig: {
        type: string
        placeholder: string
      }
      value: string
      validation: {
        required: boolean
      }
      valid: boolean
      touched: boolean
    }
    street: {
      elementType: string
      elementConfig: {
        type: string
        placeholder: string
      }
      value: string
      validation: {
        required: boolean
      }
      valid: boolean
      touched: boolean
    }
    zipcode: {
      elementType: string
      elementConfig: {
        type: string
        placeholder: string
      }
      value: string
      validation: {
        required: boolean
        minLength: number
        maxLength: number
      }
      valid: false
      touched: boolean
    }
    country: {
      elementType: string
      elementConfig: {
        type: string
        placeholder: string
      }
      value: string
      validation: {
        required: boolean
      }
      valid: boolean
      touched: boolean
    }
    email: {
      elementType: string
      elementConfig: {
        type: string
        placeholder: string
      }
      value: string
      validation: {
        required: boolean
      }
      valid: boolean
      touched: boolean
    }
    deliveryMethod: {
      elementType: string
      elementConfig: {
        options: Array<IDeliveryMethodOptions>
      }
      value: string
      validation: Object
      valid: boolean
    }

  }
  formIsValid: boolean
  loading: boolean

}

export interface ICheckoutProps {
  ings: any
  history: History
  match: any
  onInitPurchase: any
  purchased: boolean
}

interface IOrder {
  id: string
  ingredients: any
  price: number
}
export interface IOrdersProps {
  history: History
  onFetchOrders: any
  orders: Array<IOrder>
  loading: boolean
}
export interface IOrdersState {
  order: {
    orders: Array<Object>
    loading: boolean
  }
}

export interface IReducerState {
  ingredients: any
  totalPrice: number
  error: boolean
}
export interface IReducerIngredientPrices {
  salad: number
  cheese: number
  meat: number
  bacon: number
  [key:string]: number

}

export interface IReducerInitialState {
  ingredients: {
    salad: number
    bacon: number
    cheese: number
    meat: number
    [key:string]: number
  }
  totalPrice: number
} 

export interface IReducerPrices {
  salad: number
  bacon: number
  cheese: number
  meat: number
  [key:string]: number
}


