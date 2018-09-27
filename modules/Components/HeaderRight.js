import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderRight = (props) => {
    handleSettings = () => {
        props.navigation.navigate('Settings')
    }
    return (
        <TouchableOpacity onPress={this.handleSettings} style={{ marginRight: 10 }} >
            <Ionicons name="ios-cog" size={25} color="#42526E" />
        </TouchableOpacity>)
}


export default HeaderRight;