import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import LanguagesDisplay from './LanguagesDisplay';

import { styles } from '../../stylesheets/app';

const subject_details = [
    {
        name: "national_id"
    },
    {
        name: "gender"
    },
    {
        name: "age",
        display: "age years old"
    },
    {
        name: "weight",
        display: "weightkg"
    }
]

const TopHeader = (props) => {
    const { first_name, last_name, languages } = props.context.data
    const { data } = props.context
    const languagesArr = languages != null ? languages.replace('{', '').replace('}', '').split(','):null;

    const subject_description = <Text style={styles.item_sub_text}>{subject_details.map((detail, i) => {
        switch (i) {
            case (subject_details.length - 1):
                return <Text key={detail.name} style={{ color: data[detail.name] !== undefined ? "#152C52" : "grey" }}>{ data[detail.name] !== undefined && detail.display != null ? detail.display.replace(detail.name, data[detail.name]) : data[detail.name] !== undefined ? data[detail.name] : detail.name}</Text>
                break;
            default:
                return <Text key={detail.name} style={{ color: data[detail.name] !== undefined ? "#152C52" : "grey" }}>{ data[detail.name] !== undefined && detail.display != null ? detail.display.replace(detail.name, data[detail.name]) : data[detail.name] !== undefined ? data[detail.name] : detail.name} . </Text>
        }
    })}
    </Text>
    return (
        <View style={styles.header} >
            <Image
                style={styles.item_icon}
                source={require(`../../assets/patients/Genderless.png`)}
            />
            <View>
                <View style={styles.details_top} >
                    {/* need to change */}
                    <Text
                        style={styles.item_text_name}
                        title={first_name}
                    >{first_name}</Text>
                    <Text
                        style={styles.item_text_bold}
                        title={last_name}
                    >{last_name}</Text>
                </View>

                {subject_description}

                {languagesArr != null ? <LanguagesDisplay languages={languagesArr} />: null}

            </View>
        </View>
    )
}
export default TopHeader;