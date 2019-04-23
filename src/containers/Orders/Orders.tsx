import React from 'react'
import Order from "../../components/Order/Order"
import axios from "../../axios-orders"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import { IOrdersProps, IOrdersState } from "../../interfaces"


class Orders extends React.Component<IOrdersProps, IOrdersState> {
  state: IOrdersState = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        console.log(res.data);
        const fetchedOrders = [];
        for (const key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        console.log(fetchedOrders);
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);