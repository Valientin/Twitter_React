import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCIrfoYo2OQyYbq22One2IAQRV7MyTj4eY",
    authDomain: "twitter-react-44c4c.firebaseapp.com",
    databaseURL: "https://twitter-react-44c4c.firebaseio.com",
    projectId: "twitter-react-44c4c",
    storageBucket: "",
    messagingSenderId: "287734874998"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();

export {
   firebase,
   firebaseDB
}
