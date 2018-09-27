import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

// import LanguagesDisplay from './LanguagesDisplay';

import { styles } from '../../stylesheets/app';

const Card = (props) => {
    // const { first_name, last_name, languages } = props.context.data;
    const { data } = props;

    return (
        <View style={styles.card} >
        <Text style={styles.item_sub_text}>Go to Customer</Text>
            <Image
                style={styles.item_icon}
                source={require(`../../assets/patients/Genderless.png`)} />
            <View>
                <View style={styles.details_top} >
                    {/* need to change */}
                    <Text style={styles.item_text_name}>{data.first_name}</Text>
                    <Text style={styles.item_text_bold}>{data.last_name}</Text>
                </View>
                <Text style={styles.item_sub_text}>{data.role}</Text>
                <Text style={styles.item_sub_text}>{data.email}</Text>
                <Text style={styles.item_sub_text}>{data.phone}</Text>
                
            </View>
        </View>
    )
}

export default Card;