import React from 'react'
import styles from './Button.module.scss';

export default function Button(props: any): JSX.Element {
  return (
    <button
      disabled={props.disabled}
      className={[styles.Button, styles[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  )
}
