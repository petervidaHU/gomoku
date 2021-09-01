
import { combineReducers } from 'redux';
import reducer from './reducer';
import authReducers from './authReducers';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
firebaseReducer,
reducer,
firestoreReducer,
authReducers
})