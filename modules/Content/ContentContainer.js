import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from './Content';

import { SpecificContext } from '../Components/SpecificContext';

import Loading from '../Loading';

class ContentContainer extends Component {
  
  render() {
    //  include header and sections via config
    const { config } = this.props;
    let { routeName } = this.props.navigation.state;
    let details = [];
    const context = routeName.substring(0, routeName.search(" "));
    const schema = config[context].content;
    const { layout } = config.BottomNavTabs.find(item=>item.name === `${context}s`);
    
  
    if (schema != null) {
      return (
        <SpecificContext.Provider value={{ data: this.props.navigation.state.params.data, schema, route:routeName}}>
          <Content layout={layout} routeName={routeName}/>
        </SpecificContext.Provider>
      )
    } else {
      return <Loading />
    }
  }
}

const getConfig = config => {
  return config
}

const mapStateToProps = state => {
  return {
    config: getConfig(state.general.config)
  }
}

export default connect(mapStateToProps)(ContentContainer);