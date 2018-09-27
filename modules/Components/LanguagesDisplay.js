import React from 'react';
import {
    Text,
    View
} from 'react-native';
import { styles } from '../../stylesheets/app';

const LanguagesDisplay = ({languages}) => (
    <View style={{flex: 1, flexDirection: 'row', paddingLeft: 10, marginTop:2}}>{languages.map(lang =><View style={styles.lang} key={lang}><Text style={{textAlign:'center', color: '#152C52'}}>{lang[0].toUpperCase()}{lang.substring(1,lang.length)}</Text></View>)}</View>
)

export default LanguagesDisplay;