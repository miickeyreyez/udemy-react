import React, { Component } from 'react';
import Aux from '../Aux';
import Modal from '../../../Components/UI/Modal';

const erroHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }

    errorHandler() {
      this.setState({ error: null });
    }

    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.errorHandler();
        return req;
      });

      this.responseInterceptor = axios.interceptors.response.use(res => res, error => this.setState({ error }));
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    render() {
      const { error } = this.state;

      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={() => this.errorHandler()}>
            {error && error.message}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default erroHandler;
