import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
// import firebase from 'react-native-firebase';

import Loading from './Loading';

import { styles } from '../stylesheets/app';
import Auth0 from 'react-native-auth0';

import { addUser } from '../actions/general';
const auth0 = new Auth0({ domain: process.env.REACT_APP_AUTH0_DOMAIN, clientId: process.env.REACT_APP_AUTH0_CLIENTID });

class Login extends Component {
    state = {
        error: false,
        loading: false
    }

    componentDidMount() {
        auth0.webAuth
            .authorize({ scope: 'openid profile email', audience: 'https://leechuan.au.auth0.com/userinfo' })
            .then(credentials => {
                console.log(credentials)
                this.props.dispatch(addUser(credentials));
                // Successfully authenticated
                // Store the accessToken
            })
            .catch(error => console.log(error));
    }

    _onLogin = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile',
                audience: 'https://leechuan.au.auth0.com/userinfo'
            })
            .then(credentials => {
                console.log(credentials)
                this.props.dispatch(addUser(credentials));
            })
            .catch(error => console.log(error));
    };

    handleChange = (type, text) => {
        let field = {};
        field[type] = text;
        this.setState(field);
    }

    render() {

        if (!this.state.loading) {
            return (
                <View style={styles.login}>
                    <Image
                        style={styles.company_logo}
                        source={require(`../assets/logo.square.white.png`)}
                    />

                    <TouchableOpacity style={styles.loginButton} onPress={this._onLogin}>
                        <Text style={{ color: '#572847' }} >Login</Text>
                    </TouchableOpacity>

                </View>
            )
        } else {
            return <Loading />
        }
    }
}

export default connect()(Login);