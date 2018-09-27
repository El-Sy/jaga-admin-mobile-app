import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Field from './Field';

import { styles } from '../../stylesheets/app';
import ListOfSections from './ListOfSections';

class CollapsibleSection extends Component {
  state = {
    collapse: true
  }
  handlePress = () => {
    this.setState({ collapse: !this.state.collapse })
  }

  render() {

    let content = [];
    let {header,data} =this.props


    if (header.rows != null) {
      header.rows.map(row => content.push(<Field key={row.key} label={row.label} data={data[row.key]} />));
    } else {
      let newData = typeof data[header.key] !== "undefined"? data[header.key]: null;
      content = <ListOfSections header={header} data={newData}/>
    }

    return (
      <TouchableHighlight style={styles.details_block} onPress={() => this.handlePress()} >
        <View>
          <Text
            style={styles.item_text_title}
            title={header.label}
          >{header.label}</Text>
          <Collapsible collapsed={this.state.collapse}>
            {content}
          </Collapsible>
        </View>
      </TouchableHighlight>
    )
  }
}

export default CollapsibleSection;