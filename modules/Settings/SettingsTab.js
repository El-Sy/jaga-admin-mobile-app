import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text,
    Image,
    View
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../stylesheets/app';
// import firebase from 'react-native-firebase';
import Auth0 from 'react-native-auth0';

import { addUser } from '../../actions/general';

const auth0 = new Auth0({ domain: 'leechuan.au.auth0.com', clientId: 'tUE5MZoFF0JQlE9trMe80jmYbz44OBYC' });

class SettingsTab extends Component {

    // handleLogOut = () => {
    //     firebase.auth().signOut();
    // }
    _onLogout = () => {
        auth0.webAuth
            .clearSession({})
            .then(success => {
                this.props.dispatch(addUser(null));
            })
            .catch(error => console.log(error));
    };


    render() {
        //  wow data is held in this component
        let { item } = this.props;
        const icon = <Ionicons name="ios-log-out-outline" size={25} paddingTop={10} color="#152C52" />
        return (
            <TouchableHighlight onPress={this._onLogout}>
                <View style={styles.item}>
                    {icon}
                    <Text
                        style={styles.item_text}
                        title={item.name}
                    >{item.name}</Text>
                </View>
            </TouchableHighlight>)
    }
}

export default connect()(SettingsTab);