import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const witherrorHandler = (WrappedComponent:any, axios:any):any => {
  return class extends Component {
    state:any = {
      error: null
    };
    reqInterceptor: any;

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req:any) => {
        this.setState({ error: null });
        return req;
      });
      this.reqInterceptor = axios.interceptors.response.use((res:any) => (res:any, error:any) => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
        axios.interceptors.request.eject(this.reqInterceptor);
        axios.interceptors.response.eject(this.reqInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <React.Fragment>
          <Modal show={this.state.error ? true : false} modalClosed={this.errorConfirmedHandler ? false: true}>
            {this.state.error && this.state.error.message}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default witherrorHandler;
