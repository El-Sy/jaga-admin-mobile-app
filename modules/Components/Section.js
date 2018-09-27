import React from 'react';
import {
    Text,
    View
} from 'react-native';

import ListOfSections from './ListOfSections';
import Field from './Field';

import { styles } from '../../stylesheets/app';
// it must be an object by now
// but fields preferably an array
// check if fields is object or array

const Section = (props) => {
    let content = [];
    let isHeaderPresent = props.header != null && props.header.rows != null
    let title = isHeaderPresent ? <Text
        style={styles.item_text_title}
        title={props.header.label}
    >{props.header.label}</Text> : null;

    if (isHeaderPresent) {
        props.header.rows.map(row => content.push(<Field key={row.key} label={row.label} data={props.data[row.key]} />));
    } else {
        let keys = Object.keys(props.data);
        keys.map((key, i) => content.push(<Field key={`${key} ${i}`} label={key} data={props.data[key]} />))
    }
    // else {
    //     content = <ListOfSections fields={props.fields} />
    // }


    return (
        <View style={styles.details_block} >
            {title}
            {content}
        </View>
    )
}

export default Section;