import React from 'react'
import styles from "./Backdrop.module.scss"

export default function Backdrop(props: any): any {
  return (
    props.show ? (<div className={styles.Backdrop} onClick={props.clicked}></div>) : null
  )
}
