import { combineReducers } from 'redux';
import patients from './patients';
import jagapros from './jagapros';
import customers from './customers';
import general from './general';
import user from './user';
 
export default combineReducers({
    patients,
    customers,
    jagapros,
    general,
    user 
})