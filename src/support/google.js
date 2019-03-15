import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBI6QfpF1leTzQYH-Y_9jK-5BY88ubvrvo",
    authDomain: "loginwith-b8e87.firebaseapp.com",
    databaseURL: "https://loginwith-b8e87.firebaseio.com",
    projectId: "loginwith-b8e87",
    storageBucket: "",
    messagingSenderId: "891850340246"
};

firebase.initializeApp(config)
export const ref =  firebase.database().ref();
export const auth = firebase.auth;
export const provider = new firebase.auth.GoogleAuthProvider();