import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import styles from "./Toolbar.module.scss"

export default function Toolbar(props: any): JSX.Element {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}
