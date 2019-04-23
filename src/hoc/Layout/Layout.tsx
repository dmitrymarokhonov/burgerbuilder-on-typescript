import React from 'react'
import { ILayoutState } from "../../interfaces"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import styles from "./Layout.module.scss"


class Layout extends React.Component<ILayoutState> {
  state = { showSideDrawer: false }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState: ILayoutState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;