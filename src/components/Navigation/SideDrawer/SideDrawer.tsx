import React from 'react'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"
import Backdrop from "../../UI/Backdrop/Backdrop";
import styles from "./SideDrawer.module.scss";

export default function SideDrawer(props: any): JSX.Element {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
}
