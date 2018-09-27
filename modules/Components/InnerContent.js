//  Container Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabNavigator, TabBarTop } from 'react-navigation';
//  create listOfSection

import { SpecificContext } from './SpecificContext';

// presentation components
import Cards from './Cards';
import ListOfSections from './ListOfSections'
import Loading from '../Loading';


class InnerContent extends Component {

  render() {

    if (this.props.config != null) {
      const routeSubject = this.props.context.route.substring(0, this.props.context.route.search(' '))
      let TabsConfig = {};
      const fields = this.props.context.schema
      this.props.config[`${routeSubject}Tabs`].map(tab => {

        let structure = fields.find(field => field.key == tab.name.toLowerCase())
        // types of inner content

        let section = () => (
          <SpecificContext.Consumer>
            {context => <ListOfSections structure={structure} context={context} />}
          </SpecificContext.Consumer>
        )

        switch (tab.layout) {
          case ('cards'):
            section = () => (
              <SpecificContext.Consumer>
                {context => <Cards structure={structure} context={context} />}
              </SpecificContext.Consumer>
            )
            break;
          default:
            section = () => (
              <SpecificContext.Consumer>
                {context => <ListOfSections structure={structure} context={context} />}
              </SpecificContext.Consumer>
            )
        }

        TabsConfig[tab.name] = { screen: section }
      })

      const DetailsNavigator = TabNavigator(
        TabsConfig,
        {
          // navigationOptions: ({ navigation }) => ({
          // }),
          tabBarOptions: {
            activeTintColor: '#152C52',
            inactiveTintColor: 'gray',
            style: {
              backgroundColor: "#fff",
            },
            labelStyle: {
              fontWeight: '900'
            }
          },
          // indicatorStyle:{
          //   backgroundColor: '#6554C0'
          // },
          tabBarComponent: props => (
            <TabBarTop {...props} indicatorStyle={{ backgroundColor: "#8A7BDD" }} />
          ),
          tabBarPosition: 'top',
          swipeEnabled: true,
        }
      );
      return <DetailsNavigator />
    } else {
      return <Loading />
    }
  }
}

const getConfig = config => {
  return config
}

const mapStateToProps = (state) => {
  return {
    config: getConfig(state.general.config)
  }
};

export default connect(mapStateToProps)(InnerContent);