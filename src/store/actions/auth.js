import { SIGNUP_SUCCESS, 
    SIGNUP_ERROR,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR 
} from "./actions";
import firebase from './../../database/firebase'
//import firebase from './../../database/firebase';


export const signup = (email, password) => async dispatch => {
    try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(resp =>{
            console.log('resp: ', resp);
            firebase.auth().onAuthStateChanged(function(user) {
                console.log('user: ', user);
                dispatch({type: SIGNUP_SUCCESS, payload: user});
            })
        })
        .catch(function(error) {
            dispatch({
                type: SIGNUP_ERROR, payload: "no good inside try"
            })
        })
    } catch (err) {
        console.log('error: ', err)
        dispatch({
            type: SIGNUP_ERROR, payload: "no good outside try"
        })
    }
};

export const signin = (email, password, callback) => async dispatch => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log('signin res: ', res);
            dispatch({type: SIGNIN_SUCCESS});
            callback();
        })
        .catch((err)=> {
            console.log('signin error inside auth signin: ', err);
            dispatch({type: SIGNIN_ERROR, payload: "invalid signin"});
        });
    } catch (err) {
        console.log('signin error: ', err);
        dispatch({type: SIGNIN_ERROR, payload: "invalid signin"});
    }
};