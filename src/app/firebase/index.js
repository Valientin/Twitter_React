import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyCIrfoYo2OQyYbq22One2IAQRV7MyTj4eY",
    authDomain: "twitter-react-44c4c.firebaseapp.com",
    databaseURL: "https://twitter-react-44c4c.firebaseio.com",
    projectId: "twitter-react-44c4c",
    storageBucket: "twitter-react-44c4c.appspot.com",
    messagingSenderId: "287734874998"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseAuth = firebase.auth();

export {
   firebase,
   firebaseDB,
   firebaseAuth
}
