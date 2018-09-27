import React, { Component } from 'react';

import {
    TouchableHighlight,
    Text,
    Image,
    View
} from 'react-native';

import { styles } from '../../stylesheets/app';

class ListItem extends Component {
    render() {
        let {item} = this.props;
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate(`${this.props.navigation.state.routeName.substring(0, this.props.navigation.state.routeName.length - 1)} Details`, item)}>
                <View style={styles.item} >
                    <Image
                        style={styles.item_icon}
                        source={require('../../assets/patients/Genderless.png')}
                    />
                    <Text
                        style={styles.item_text}
                        title={item.name}
                    >{item.name}</Text>
                </View>
            </TouchableHighlight>)
    }
}

export default ListItem;