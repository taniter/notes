import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyClUmZwYb2qXIoUmH9Mb_h3cG_mlp240Es",
    authDomain: "contactproject-417ba.firebaseapp.com",
    databaseURL: "https://contactproject-417ba.firebaseio.com",
    projectId: "contactproject-417ba",
    storageBucket: "contactproject-417ba.appspot.com",
    messagingSenderId: "553025843254",
    appId: "1:553025843254:web:86c7a60522e8d702092897",
    measurementId: "G-RDSG39EEXS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const DBnotes = firebase.database().ref("/notes");