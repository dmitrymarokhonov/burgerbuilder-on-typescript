import React, { Component } from 'react'
import { IModalProps } from "../../../interfaces"
import Backdrop from '../Backdrop/Backdrop'
import styles from "./Modal.module.scss";

class Modal extends React.Component<IModalProps> {
  shouldComponentUpdate(nextProps: any) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate() {
    console.log("[Modal] componentWillUpdate");
  }

  render() {
    const classes: string[] = [styles.Modal, this.props.show ? styles.Visible : styles.Hidden];

    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classes.join(" ")}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
