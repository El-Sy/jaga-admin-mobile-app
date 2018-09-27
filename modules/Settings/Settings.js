import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    ScrollView,
    Button,
    TextInput
} from 'react-native';

//  Presentation Components
import SettingsTab from './SettingsTab';
import Loading from '../Loading';

//  Styles
import { styles } from '../../stylesheets/app';

const settingsConfig = [
    {
        name: "Logout",
        id: "logout"
    }
];

class Settings extends Component {

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({ item }) => <SettingsTab id={item.id} {...this.props} item={item} />

    render() {
        let { routeName } = this.props.navigation.state
        let Title = <Text style={styles.title}>{routeName}</Text>;
        let dataList = settingsConfig

        //  limit the number of results in the list
        //  this pass all props of the item into the list item
        if (dataList.length > 0) {
            let list = <FlatList
                data={dataList}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />

            if (dataList.length < 1) {
                list = <View style={styles.content}>
                    <Text style={styles.normal_text} >There are no {routeName}</Text>
                </View>
            }

            return (
                <View style={styles.container}>
                    {list}
                </View>
            );
        } else {
            return <Loading />
        }
    }
};

export default Settings;