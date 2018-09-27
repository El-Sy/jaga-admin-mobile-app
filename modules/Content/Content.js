import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { styles } from '../../stylesheets/app';
// import Collapsible from 'react-native-collapsible';

import TopHeader from '../Components/TopHeader';
import ListOfSections from '../Components/ListOfSections';
import { SpecificContext } from '../Components/SpecificContext';
import InnerContent from '../Components/InnerContent';

class Content extends Component {

  render() {
    let section = null;
    switch (this.props.layout) {
      case ("list"):
        section = <SpecificContext.Consumer>
          {context => <ListOfSections context={context} />}
        </SpecificContext.Consumer>
        break;
      default:
        section = <SpecificContext.Consumer>
          {context => <InnerContent context={context} />}
        </SpecificContext.Consumer>
        break;
    }
    return (
      <View style={styles.container}>
        {/* header */}
        <SpecificContext.Consumer>
          {context => <TopHeader context={context} />}
        </SpecificContext.Consumer>
        {/* {details} */}
        {section}
      </View>
    );
  }
}

export default Content;