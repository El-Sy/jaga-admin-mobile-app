import React, {Component} from 'react';
import {
    View,
    Button,
    Image,
    Alert
} from 'react-native';

//import styles
import { styles } from '../stylesheets/app';

class BottomNav extends Component{
    handlePress(){
        Alert.alert('You tapped on Patients!');
    }
    render(){
        return(
        <View style={styles.bottom_nav}>
        <Button
        style={styles.bottom_nav_button}
        onPress={this.handlePress}
        title="Patients"
        >
        </Button>

        <Button
        style={styles.bottom_nav_button}
        onPress={this.handlePress}
        title="Clients"
        >
        </Button>

        <Button
        style={styles.bottom_nav_button}
        onPress={this.handlePress}
        title="JagaPros"
        >
        </Button>

        <Button
        style={styles.bottom_nav_button}
        onPress={this.handlePress}
        title="Add Appt"
        >
        </Button>
        </View>
        )
    }
}

export default BottomNav;