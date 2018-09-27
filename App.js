import React, { Component } from 'react';
import { connect } from 'react-redux';

import RootTabs from './modules/RootTabs';
import Login from './modules/Login';
import Loading from './modules/Loading';

import { fetchConfig } from './actions/general';

// import config from './config.json';

class App extends Component {

  componentDidMount() {
    this.props.fetchConfig();
  }

  render() {
    if (this.props.config != null && this.props.user) {
      return <RootTabs config={this.props.config}/>;
    } else if (!this.props.user) {
      return <Login {...this.props}/>
    } else if (this.props.config == null && !this.props.user) {
      return <Loading />
    }
  }
}

const getConfig = config => {
  return config
}

const getUser = user => {
  return user
}

const mapStateToProps = state => {
  return {
    config: getConfig(state.general.config),
    user: getUser(state.user)
  }
}

export default connect(mapStateToProps, { fetchConfig })(App);