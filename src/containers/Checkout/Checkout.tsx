import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import ContactData from "./ContactData/ContactData"
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import { ICheckoutProps } from "../../interfaces"


class Checkout extends React.Component<ICheckoutProps> {

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      summary = (
        <div>
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route path={this.props.match.path + "/contact-data"} component={ContactData} />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state: any) => {
  return {
    ings: state.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);