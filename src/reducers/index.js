import {combineReducers} from 'redux';
import listReducer from './list_reducer'
import {reducer as formReducer} from 'redux-form'
// import {createStore, applyMiddleware} from 'redux';
// import promise from 'redux-promise';

export default combineReducers({
    list: listReducer,
    form: formReducer
})