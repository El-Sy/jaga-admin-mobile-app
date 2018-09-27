//  Container Component
import React, { Component } from 'react';
//  create listOfSection
import {
    ScrollView
} from 'react-native';

// presentation components
import Card from './Card';


// modelling data structure without schema

class Cards extends Component {

    render() {

        return (
            <ScrollView>
                <Card data={{
                    first_name: "John",
                    last_name: "Tan",
                    role: "Primary Caregiver",
                    email: "john.tan@hotmail.com",
                    phone: "8778 9000"
                }} />
                <Card data={{
                    first_name: "Hospital",
                    last_name: "TTSH",
                    role: "Partner Organisation",
                    email: "ttsh@hotmail.com",
                    phone: "8778 9000"
                }}/>
            </ScrollView>
        );
    }
}

export default Cards;


