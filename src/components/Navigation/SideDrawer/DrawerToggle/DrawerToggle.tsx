import React from 'react'
import styles from "./DrawerToggle.module.scss"

export default function DrawerToggle(props: any): JSX.Element {
  return (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  )
}
