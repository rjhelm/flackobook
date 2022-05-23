import { compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux';
import configureStore from '@reduxjs/toolkit'

// enables redux-store chrome extension
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux/Store
const store = configureStore(combineReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;