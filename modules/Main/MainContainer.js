import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

//  Presentation Component
import MainView from './MainView';

//  Actions
import { addCustomers } from '../../actions/customers';
import { addPatients } from '../../actions/patients';
import { addJagaPros } from '../../actions/jagapros';


class MainContainer extends Component {
    constructor(props) {
        super(props)
        //  getting the right collection
        this.route = props.navigation.state.routeName.toLowerCase();
        this.ref = firebase.firestore().collection(this.route);
    }

    componentDidMount() {
        let allDocs = this.ref.get()
            .then(snapshot => {
                let docs = []
                snapshot.forEach(doc => {
                    // push
                    docs.push(
                        {
                            key: doc.id,
                            id: doc.id,
                            data: doc.data(),
                            name: `${doc.data().first_name} ${doc.data().last_name}`
                        });
                });
                //  add into redux store
                switch (this.route) {
                    case ('jagapros'):
                        return this.props.dispatch(addJagaPros(docs))
                        break;
                    case ('customers'):
                        return this.props.dispatch(addCustomers(docs))
                        break;
                    case ('patients'):
                        return this.props.dispatch(addPatients(docs))
                        break;
                    default:
                        return null;
                }

            })
            .catch(err => {
                console.error('Error getting documents', err);
            })
    };
    render() {
        return <MainView {...this.props} />
    }
};

const getPatients = patients => {
    return patients
}

const getCustomers = customers => {
    return customers
}

const getJagaPros = jagapros => {
    return jagapros
}
const mapStateToProps = state => {
    return {
        patients: getPatients(state.patients),
        jagapros: getJagaPros(state.jagapros),
        customers: getCustomers(state.customers)
    }
}

export default connect(mapStateToProps)(MainContainer);