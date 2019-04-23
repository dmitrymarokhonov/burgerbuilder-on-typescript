import React from 'react'
import { IBuildControls } from "../../../interfaces"
import BuildControl from "./BuildControl/BuildControl"
import styles from "./BuildControls.module.scss"

export const controls: IBuildControls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

interface IProps {
  price: number
  purchasable: boolean
  ingredientAdded: any
  ingredientRemoved: any
  disabled: any
  ordered: any
}

const BuildControls = (props: IProps): JSX.Element => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={styles.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
    </button>
    </div>
  )
}

export default BuildControls
