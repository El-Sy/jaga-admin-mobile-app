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
import ListItem from '../Components/ListItem';
import Loading from '../Loading';

//  Styles
import { styles } from '../../stylesheets/app';

const Rows = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>Search {props.routeName}</Text>
        <TextInput style={styles.search}></TextInput>
        {props.Title}
        {props.list}
    </View>)

class MainView extends Component {

    render() {
        const {routeName} = this.props.navigation.state;
        const Title = <Text style={styles.title}>Recent {routeName}</Text>;
        const data = this.props[routeName.toLowerCase()]
        const dataList = data != null ? data : [];
        if (dataList.length > 0) {
            let list = <FlatList
                data={dataList}
                renderItem={({ item }) =>
                    <ListItem {...this.props} item={item} />
                }
            />

            if (dataList.length < 1) {
                list = <View style={styles.content}>
                    <Text style={styles.normal_text} >There are no {routeName}</Text>
                </View>
            }

            return (
                <Rows routeName={routeName} Title={Title} list={list} />
            );
        } else {
            return <Loading />
        }
    }
};

export default MainView;