import React from 'react'
import styles from "./Logo.module.scss"
import burgerLogo from '../../assets/images/burger-logo.png'

export default function Logo(props:any):JSX.Element {
  return (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="Burger"/>
    </div>
  )
}
