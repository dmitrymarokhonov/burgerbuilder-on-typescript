import React from 'react'
import styles from "./Spinner.module.scss"

export default function Spinner(props: any): JSX.Element {
  return (
    <div className={styles.Loader}>Loading...</div>
  )
}
