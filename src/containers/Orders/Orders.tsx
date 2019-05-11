import React from "react"
import { connect } from "react-redux"
import Order from "../../components/Order/Order"
import axios from "../../axios-orders"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import { IOrdersProps, IOrdersState } from "../../interfaces"
import * as actions from "../../store/actions/index"
import Spinner from "../../components/UI/Spinner/Spinner"

class Orders extends React.Component<IOrdersProps, IOrdersState> {

  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = <div>
        {this.props.orders.map(order => (
          <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
        ))}
      </div>;
    }
    return orders;
  }
}

const mapStateToProps = (state: IOrdersState) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
