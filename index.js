import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//  Dirty Fix to ignore dev related issues
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import rootReducer from './reducers';
import App from './App';
// import Login from './modules/Login';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const Index = () => (
    <Provider store={store}>
        <App />
    </Provider>)

AppRegistry.registerComponent('JagaAdminMobileApp', () => Index);