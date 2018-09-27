//  Container Component
import React, { Component } from 'react';
//  create listOfSection
import {
  ScrollView,
  Text,
  View
} from 'react-native';

// presentation components
import CollapsibleSection from './CollapsibleSection';
import Section from './Section';
import Field from './Field';

//  Consume Context
import { SpecificContext } from './SpecificContext';

import { styles } from '../../stylesheets/app';

// modelling data structure without schema

class ListOfSections extends Component {


  handleClick = (index) => {
    let newSections = Object.assign({}, this.state.sections)
    newSections[index].collapse = !this.state.sections[index].collapse
    this.setState({ newSections })
  }

  render() {
    // include header and sections via config
    let data = this.props.context != null ? this.props.context.data : this.props.data;
    let structure = this.props.structure != null ? this.props.structure.rows : this.props.context != null ? this.props.context.schema : this.props.header;
    //  default
    let details = [];
    if (structure != null && structure.length > 0) {
      structure.map((header, i) => {
        switch (header.form) {
          case ("collapsible"):
            details.push(
              <CollapsibleSection
                index={i}
                key={header.key}
                header={header}
                state={this.state}
                data={data} />
            )
            break
          default:
            details.push(
              <Section
                index={i}
                key={header.key != null ? header.key : header}
                header={header}
                data={data} />)
            break
        }
      });
    } else if (data != null && data[this.props.structure.label.toLowerCase()] != null) {
      data[this.props.structure.label.toLowerCase()].map((datum, i) => {
        details.push(<Section key={`${Math.floor((Math.random() * 100) + 1)} ${i}`} data={datum} />)
      })
    } else {
      details = <View style={styles.container}><View style={styles.content}><Text style={styles.text_color}>There is no data available</Text></View></View>
    }

    return (
      <ScrollView>
        {details}
      </ScrollView>
    );
  }
}

export default ListOfSections;