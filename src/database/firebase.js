// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import "firebase/auth";
import config from './config';

firebase.initializeApp(config);

export default firebase;